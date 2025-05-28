import React from 'react';
import { Card } from '@/components/ui/card';
import InputGroup from './InputGroup';
import Actions from './Actions';

const LoginCard: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLoginSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login submitted:', { email, password });
    // TODO: Implement actual login logic
  }, [email, password]);

  return (
    <Card className="w-[300px] bg-surface rounded-md shadow-md p-6">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primaryText font-sans">
            Welcome
          </h1>
        </div>

        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
          <InputGroup
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <InputGroup
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Actions />
        </form>
      </div>
    </Card>
  );
};

export default LoginCard;
