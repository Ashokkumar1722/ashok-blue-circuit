import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "eashokkumar017@gmail.com",
    href: "mailto:eashokkumar017@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/e-ashok-kumar-7a9210355",
    href: "https://linkedin.com/in/e-ashok-kumar-7a9210355"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Ashokkumar1722",
    href: "https://github.com/Ashokkumar1722"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9347609372",
    href: "tel:+919347609372"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-border-glow inline-block border-b-2 border-primary pb-2">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <Button
                key={info.label}
                asChild
                variant="outline"
                className="h-auto p-6 border-primary/30 hover:border-primary hover:shadow-neon-strong transition-all duration-300 group"
              >
                <a href={info.href} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-4 w-full">
                    <Icon className="w-8 h-8 text-primary group-hover:animate-glow-pulse" />
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium break-all">{info.value}</div>
                    </div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
