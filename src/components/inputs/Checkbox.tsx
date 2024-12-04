"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";

type Props<S> = {
  label?: string;
  nameInSchema: keyof S & string;
  message?: string;
  disabled?: boolean;
};

export function CheckboxForm<S>({
  label,
  nameInSchema,
  message,
  disabled = false,
}: Props<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="w-full flex items-center gap-2">
          {label && (
            <FormLabel className="text-base w-1/3 mt-2" htmlFor={nameInSchema}>
              {label}
            </FormLabel>
          )}

          <div className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                id={nameInSchema}
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            {message && <FormDescription>{message}</FormDescription>}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
