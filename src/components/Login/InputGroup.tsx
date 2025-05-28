import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface InputGroupProps {
  id: string;
  label: string;
  type: 'email' | 'password' | 'text';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  className,
  autoComplete,
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label htmlFor={id} className="text-xs text-secondaryText font-normal">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-auto border-0 border-b border-input px-0 py-1.5 text-sm text-primaryText focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-2 focus-visible:border-b-primary rounded-none shadow-none bg-transparent"
      />
    </div>
  );
};

export default InputGroup;
