import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex items-center justify-center h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
