# Juice Dating App Monorepo

This project is a public demo and boilerplate for setting up a Yarn workspace with an Expo-based dating app and a Supabase backend. It demonstrates how to structure a monorepo for a full-stack mobile application using modern technologies.

## Project Structure

- `apps/juice-dating-app`: Expo-based React Native frontend for the dating app
- `apps/juice-api`: Supabase API backend for the dating app

## Features

- Yarn workspace for managing multiple packages
- Expo-powered React Native mobile app
- Supabase backend for authentication, database, and real-time features
- Theming support with light and dark modes
- Custom components for consistent UI (ThemedButton, ThemedText, etc.)
- Font loading and splash screen management

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/rtaydev/juice-workspace.git
   cd juice-dating-app
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Set up Supabase:

   - Create a Supabase project
   - Update the Supabase configuration in `apps/juice-api`

4. Start the Expo app:

   ```
   cd apps/juice-dating-app
   yarn start
   ```

5. Run the API (if needed):
   ```
   cd apps/juice-api
   yarn start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
