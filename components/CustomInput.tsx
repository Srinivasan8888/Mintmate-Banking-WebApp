import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const fromSchema = authFormSchema('sign-up');

interface CustomInputProps {
  control: Control<z.infer<typeof fromSchema>>;
  name: FieldPath<z.infer<typeof fromSchema>>;
  label: string;
  id?: string;
  placeholder: string;
}

export const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};
