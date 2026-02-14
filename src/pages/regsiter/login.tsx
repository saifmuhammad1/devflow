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
import { signIn, signUp } from "@/feature/auth/authetication";
import { useNavigate } from "react-router-dom";

type LoginForm = z.infer<typeof LoginSchema>;
type TAutentication = {
  authType: "login" | "signin";
};
type AuthType = "login" | "signin";

function Autentication({ authType = "login" }: TAutentication) {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<LoginForm>();
  const navigate = useNavigate();
  const handleLogin = async (data: TLogin) => {
    try {
      console.log("log in");
      const responce = await signIn(data);
      if (responce.error) {
        console.error(responce.error.message);
        return;
      }

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async (data: TLogin) => {
    try {
      console.log("sign in");
      const responce = await signUp(data);

      if (responce.error) {
        console.error(responce.error.message);
        return;
      }

      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const authenticationHandlers: Record<
    AuthType,
    (data: TLogin) => Promise<void> | void
  > = {
    login: handleLogin,
    signin: handleSignIn,
  };
  const handleSubmitData = (data: TLogin) => {
    try {
      return authenticationHandlers[authType](data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("the erreor is ", errors);
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center  bg-linear-to-b from-[#14432c] to-[#388162] ">
      <h1 className="font-bold text-2xl text-white"> DevFlow</h1>

      <Card className="w-full max-w-sm gap-4">
        <CardHeader>
          <CardTitle>
            {authType === "login" ? "Login to your account" : "Sigup "}
          </CardTitle>

          <CardDescription>
            {authType === "login"
              ? "Enter your email below to login to your account"
              : "Enter your email below to Signup to your account "}
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="flex flex-col gap-3"
        >
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div
                  className={
                    authType === "login" ? `flex items-center` : "hidden"
                  }
                >
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="******"
                  {...register("password")}
                  autoComplete={
                    authType === "login" ? "current-password" : "new-password"
                  }
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Autentication;
