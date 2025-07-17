import { ArrowRight, Shield, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <UserPlus className="h-4 w-4 mr-2" /> Create Your Account
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Join LaShido EdTech
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Unlock access to hands-on tutorials, expert-led events, community forums, and a world of cybersecurity opportunities.
          </p>
        </div>
      </section>

      {/* Register Form Section */}
      <section className="flex-1 px-4 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          <Card className="border-primary/20 bg-card/90 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Create your free account
              </CardTitle>
              <CardDescription>
                Get started in seconds — your data is secure with us!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary transition"
                    placeholder="Your full name"
                  />
                </div>
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
                    placeholder="Choose a secure password"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4 text-primary" />
                  Your password is encrypted and never shared.
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground mt-4"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : <>Create Account <ArrowRight className="ml-2 h-5 w-5" /></>}
                </Button>
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary underline hover:text-accent">
                    Log in
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
            We follow OWASP, GDPR and CCPA standards. Multi-factor authentication, end-to-end encryption, and privacy-first policies keep your information safe.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
