import { SignInForm } from "@/components/forms/signin-form";
import { SignUpForm } from "@/components/forms/signup-form";

export default function About() {
  const testVariable = "About page";
  return (
    <>
      <h1>{testVariable}</h1>
      <div className="px-4 py-8 flex flex-col md:flex-row">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
          <SignUpForm />
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold mb-8">Sign In</h1>
          <SignInForm />
        </div>
      </div>
    </>
  );
}
