import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "@/components/auth/SignupForm";
import { LoginForm } from "@/components/auth/LoginForm";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 text-center">
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-primary-foreground/90">
              {isSignup ? "Join us today" : "Sign in to continue"}
            </p>
          </div>

          <div className="p-8">
            {isSignup ? (
              <SignupForm onSuccess={() => navigate("/")} />
            ) : (
              <LoginForm onSuccess={() => navigate("/")} />
            )}

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <span className="font-semibold text-primary">Sign in</span>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <span className="font-semibold text-primary">Sign up</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
