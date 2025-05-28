import React from 'react';
import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils'; // Not used in this component

const Actions: React.FC = () => {
  const handleForgotPassword = React.useCallback(() => {
    console.log('Forgot Password clicked');
    // TODO: Implement forgot password logic
  }, []);

  const handleSignUp = React.useCallback(() => {
    console.log('SignUp clicked');
    // TODO: Implement sign up navigation or logic
  }, []);

  return (
    <div className="flex flex-col gap-4 pt-2">
      <Button
        variant="link"
        type="button"
        className="p-0 h-auto text-xs text-secondaryText self-start font-normal hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0"
        onClick={handleForgotPassword}
      >
        Forgot Password
      </Button>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm py-2.5"
      >
        Login
      </Button>

      <p className="text-xs text-center text-primaryText">
        Don't have an account?{' '}
        <Button
          variant="link"
          type="button"
          className="p-0 h-auto text-primary inline font-medium text-xs hover:text-primary/90 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleSignUp}
        >
          SignUp
        </Button>
      </p>
    </div>
  );
};

export default Actions;
