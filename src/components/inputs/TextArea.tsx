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
import { Textarea } from "@/components/ui/textarea";
import { TextareaHTMLAttributes } from "react";

type IProps<S> = {
  label?: string;
  placeholder?: string;
  description?: string;
  nameInSchema: keyof S & string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea<S>({
  label,
  description,
  placeholder,
  nameInSchema,
  className,
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
            <FormLabel className="text-base mb-2" htmlFor={nameInSchema}>
              {label}
            </FormLabel>
          )}

          <FormControl>
            <Textarea
              {...field}
              {...props}
              id={nameInSchema}
              className={className}
              placeholder={placeholder || ""}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
