import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X, BookOpen, Users, Briefcase, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Tutorials", href: "/tutorials", icon: BookOpen },
    { name: "Community", href: "/community", icon: Users },
    { name: "Jobs", href: "/jobs", icon: Briefcase },
    { name: "Events", href: "/events", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-20"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LaShido EdTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" size="sm" className="justify-start">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
