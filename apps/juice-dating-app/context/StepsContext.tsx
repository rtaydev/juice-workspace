import React, { createContext, useState, useContext } from 'react';

interface StepsContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: any;
  setFormData: (data: any) => void;
}

const StepsContext = createContext<StepsContextType | undefined>(undefined);

export const StepsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  return (
    <StepsContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData }}>
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepsContext);
  if (context === undefined) {
    throw new Error('useSteps must be used within a StepsProvider');
  }
  return context;
};