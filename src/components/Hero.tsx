import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import profileImage from "@/assets/profile.jpg";

interface HeroProps {
  isAdmin: boolean;
}

const Hero = ({ isAdmin }: HeroProps) => {
  const [currentImage, setCurrentImage] = useState(profileImage);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentImage(e.target?.result as string);
        toast.success("Profile image updated");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-neon-strong animate-glow-pulse">
              <img 
                src={currentImage} 
                alt="E Ashok Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            {isAdmin && (
              <div className="absolute bottom-4 right-4 md:right-12">
                <label htmlFor="profile-upload">
                  <Button
                    size="icon"
                    className="rounded-full shadow-neon cursor-pointer bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <span>
                      <Upload className="w-4 h-4" />
                    </span>
                  </Button>
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-primary animate-border-glow whitespace-nowrap">
              E Ashok Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/90">
              VLSI and Embedded Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              I build the gap between code and circuits — creating intelligent embedded systems and Python-powered solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 shadow-neon"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
