import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginSchema } from "@/schema/loginSchema";
import type z from "zod";

import { useForm } from "react-hook-form";
import type { TLogin } from "@/type/loginType";
import { signIn } from "@/feature/auth/authetication";
import { useLocation, useNavigate } from "react-router-dom";

type LoginForm = z.infer<typeof LoginSchema>;

function SignIn() {
  const navigation = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>();

  const handleSignId = async (data: TLogin) => {
    try {
      const responce = await signIn(data);

      if (responce.data) {
        navigation("/login");
      }
    } catch (errors) {
      console.error(errors);
    }
  };

  console.log(errors);
  return (
    <Card className="w-full max-w-sm border block">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleSignId)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
