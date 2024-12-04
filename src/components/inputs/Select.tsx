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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DataObj = {
  id: string;
  description: string;
};

type Props<S> = {
  label?: string;
  placeholder?: string;
  description?: string;
  nameInSchema: keyof S & string;
  data: DataObj[];
  className?: string;
};

export function SelectForm<S>({
  label,
  placeholder,
  description,
  nameInSchema,
  data,
  className,
}: Props<S>) {
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

          <Select {...field} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                id={nameInSchema}
                className={`w-full max-w-xs ${className}`}
              >
                <SelectValue placeholder={placeholder || "Select"} />
              </SelectTrigger>
            </FormControl>

            {description && <FormDescription>{description}</FormDescription>}

            <SelectContent>
              {data.map((item) => (
                <SelectItem key={`${nameInSchema}_${item.id}`} value={item.id}>
                  {item.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
