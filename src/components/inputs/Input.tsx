"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

type IProps<S> = {
  label?: string;
  description?: string;
  placeholder?: string;
  type?: string;
  nameInSchema: keyof S & string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputForm<S>({
  label,
  description,
  placeholder,
  nameInSchema,
  className,
  type,
  ...props
}: IProps<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-base" htmlFor={nameInSchema}>
              {label}
            </FormLabel>
          )}

          <FormControl>
            <Input
              {...field}
              {...props}
              id={nameInSchema}
              type={type || "text"}
              placeholder={placeholder || ""}
              className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-75 ${className}`}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
