import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginCard from '../components/Login/LoginCard';

/**
 * LoginPage Component
 *
 * This is the main page for user authentication. It serves as the entry point for the login interface.
 * It utilizes the AuthLayout to provide a consistent, centered structure for the content
 * and renders the LoginCard component, which contains the actual login form elements.
 *
 * To align with the visual design provided in the reference image (blue page background, white login card),
 * this page passes `className="bg-pageBackground"` to the `AuthLayout` component.
 * The `bg-pageBackground` utility class is configured in `tailwind.config.ts` to use the project's
 * defined page background color (`#007BFF`). This ensures that the `AuthLayout`'s main container
 * has the correct blue background, overriding any default background it might set (like `bg-background`
 * which maps to white in the current theme) via Tailwind's class precedence.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout className="bg-pageBackground">
      <LoginCard />
    </AuthLayout>
  );
};

export default LoginPage;
