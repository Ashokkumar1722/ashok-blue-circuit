import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
interface NavigationProps {
  isAdmin: boolean;
  onAdminClick: () => void;
  onLogout: () => void;
}
const Navigation = ({
  isAdmin,
  onAdminClick,
  onLogout
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#skills",
    label: "Skills"
  }, {
    href: "#tools",
    label: "Tools"
  }, {
    href: "#resume",
    label: "Resume"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-neon" : "bg-transparent"}`}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <a key={item.href} href={item.href} onClick={e => handleNavClick(e, item.href)} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.label}
              </a>)}
            <Button size="sm" onClick={isAdmin ? onLogout : onAdminClick} className={isAdmin ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"}>
              <Shield className="w-4 h-4 mr-2" />
              {isAdmin ? "Logout" : "Admin"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-primary/30">
            {navItems.map(item => <a key={item.href} href={item.href} onClick={e => handleNavClick(e, item.href)} className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.label}
              </a>)}
            <Button size="sm" onClick={isAdmin ? onLogout : onAdminClick} className={`w-full mt-4 ${isAdmin ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"}`}>
              <Shield className="w-4 h-4 mr-2" />
              {isAdmin ? "Logout" : "Admin"}
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;