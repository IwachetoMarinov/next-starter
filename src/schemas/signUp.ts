import * as z from "zod";

export const signUpSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  state: z.string().length(2, {
    message: "State must be 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Descripption must be at least 2 characters.",
  }),
  completed: z.boolean({
    message: "Please check the box.",
  }),
  selectedDate: z.date({
    required_error: "Please select a date.",
  }),
});
