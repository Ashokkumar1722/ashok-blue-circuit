import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";
import { toast } from "sonner";

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleLogin = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    toast.success("Admin mode deactivated");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        isAdmin={isAdmin} 
        onAdminClick={() => setShowAdminLogin(true)}
        onLogout={handleLogout}
      />
      <Hero isAdmin={isAdmin} />
      <About />
      <Projects isAdmin={isAdmin} />
      <Skills isAdmin={isAdmin} />
      <Tools />
      <Resume isAdmin={isAdmin} />
      <Contact />
      <Footer />
      <AdminLogin 
        open={showAdminLogin} 
        onOpenChange={setShowAdminLogin}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
