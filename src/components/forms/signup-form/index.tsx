"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

import { signUpSchema as formSchema } from "@/schemas/signUp";
import { InputForm } from "@/components/inputs/Input";

export function SignUpForm() {
  const { toast } = useToast();

  const defaultValues = {
    username: "",
    email: "",
    password: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputForm
          label="Username"
          nameInSchema="username"
          placeholder="username"
          description="This is your public display name."
        />

        <InputForm
          label="Email"
          nameInSchema="email"
          placeholder="email"
          description="We'll never share your email with anyone else."
        />

        <InputForm
          label="Password"
          nameInSchema="password"
          placeholder="********"
          description=" Your password must be at least 8 characters long."
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
