import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { supabase } from '../index';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabase.auth.signUp({
      email,
      password: hashedPassword,
    });

    if (error) throw error;

    res.status(201).json({ message: 'User registered successfully', user: data.user });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const token = jwt.sign({ userId: data.user!.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.json({ token, user: data.user });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;