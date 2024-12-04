"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { formSchema } from "@/schemas/signUp";

import { InputForm } from "@/components/inputs/Input";
import { SelectForm } from "@/components/inputs/Select";
import { TextArea } from "@/components/inputs/TextArea";
import { CheckboxForm } from "@/components/inputs/Checkbox";
import { CalendarForm } from "@/components/inputs/Calendar";
// DB
import { statesArray } from "@/contsants/mockups";

const AllForms = () => {
  const { toast } = useToast();

  const defaultValues = {
    email: "",
    state: "",
    description: "",
    selectedDate: new Date(),
    completed: false,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  console.log(form);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Base Input */}
        <div className="flex felx-col md:fles-row gap-4">
          <div className="w-1/2">
            <InputForm
              label="Base Input with label, placeholder, and description which are optional"
              nameInSchema="email"
              placeholder="email"
              description="We'll never share your email with anyone else."
            />

            {/* Base Select */}
            <SelectForm
              label="Base Select with label placeholder and description which are optional"
              data={statesArray}
              nameInSchema="state"
              description="Select your state"
            />
            {/* <SelectForm<insertCustomerSchemaType>
              fieldTitle="State"
              data={StatesArray}
              nameInSchema="state"
            /> */}

            {/* Textarea */}
            <TextArea
              label="Base TextArea with label placeholder and description which are optional"
              nameInSchema="description"
              description="Write a description"
            />

            <CheckboxForm
              label="Checkbox with label and message"
              nameInSchema="completed"
              message="Message"
            />
            <CalendarForm
              label="Based Calendar with label and message"
              nameInSchema="selectedDate"
              placeholder="Choose a date"
              description="Choose a date"
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AllForms;
