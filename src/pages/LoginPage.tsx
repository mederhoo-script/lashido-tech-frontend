import { ArrowRight, Shield, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <LogIn className="h-4 w-4 mr-2" /> Welcome Back!
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Login to LaShido EdTech
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Securely access your account and continue learning, collaborating, and growing in cybersecurity.
          </p>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="flex-1 px-4 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <Card className="border-primary/20 bg-card/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Login to your account
              </CardTitle>
              <CardDescription>
                Your credentials are encrypted and always protected.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary transition"
                    placeholder="Your password"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4 text-primary" />
                  Secure login with multi-factor authentication.
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground mt-4"
                  disabled={loading}
                >
                  {loading ? "Logging In..." : <>Login <ArrowRight className="ml-2 h-5 w-5" /></>}
                </Button>
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="/register" className="text-primary underline hover:text-accent">
                    Register
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Assurance Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Your Data is Protected</h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            We use industry-best security standards: OWASP, GDPR, CCPA, multi-factor authentication, and end-to-end encryption.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
