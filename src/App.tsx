import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

function App() {
  const Login = lazy(() => import("@/pages/regsiter/login"));
  const SignIn = lazy(() => import("@/pages/regsiter/signIn"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login authType="login" />} />
        <Route path="/signin" element={<Login authType="signin" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
