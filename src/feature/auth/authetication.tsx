import { supabase } from "@/lib/superbase/superbase";
import type { TLogin } from "@/type/loginType";

export const signUp = (data: TLogin) =>
  supabase.auth.signUp({ email: data.email, password: data.password });

export const signIn = (data: TLogin) => supabase.auth.signInWithPassword(data);

export const signOut = () => supabase.auth.signOut();
