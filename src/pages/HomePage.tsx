import { ArrowRight, Shield, Code, Users, BookOpen, Briefcase, Calendar, Trophy, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Tutorials",
      description: "Learn cybersecurity and software development through hands-on tutorials and real-world scenarios.",
      color: "cyber-green"
    },
    {
      icon: Users,
      title: "Community Forums",
      description: "Connect with fellow learners, share knowledge, and collaborate on projects in our vibrant community.",
      color: "cyber-blue"
    },
    {
      icon: Briefcase,
      title: "Job Board",
      description: "Discover cybersecurity and tech job opportunities from top companies worldwide.",
      color: "cyber-purple"
    },
    {
      icon: Calendar,
      title: "Live Events",
      description: "Attend webinars, workshops, and conferences led by industry experts.",
      color: "cyber-orange"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Learners" },
    { number: "500+", label: "Tutorials" },
    { number: "50+", label: "Expert Instructors" },
    { number: "95%", label: "Job Placement Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🚀 New: Advanced Ethical Hacking Course Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Master Cybersecurity &
              <br />
              <span className="text-primary">Software Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of learners in our comprehensive platform designed to build secure, scalable software 
              and protect digital assets through hands-on learning and expert guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              <Shield className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Excel in <span className="text-primary">Cybersecurity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines theoretical knowledge with practical skills to prepare you for real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Focus Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Built with <span className="text-primary">Security First</span> Principles
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform follows OWASP guidelines and implements industry best practices 
                to ensure your data is protected while you learn.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>End-to-end encryption for all communications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Multi-factor authentication support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>GDPR and CCPA compliant</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
              <Card className="relative border-primary/20 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>Sample Security Implementation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg overflow-x-auto">
{`# Secure authentication example
from django.contrib.auth import authenticate
from django_otp.decorators import otp_required

@otp_required
def secure_endpoint(request):
    # Implement secure logic here
    return JsonResponse({'status': 'success'})`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our comprehensive cybersecurity and development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <Trophy className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              View Course Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;