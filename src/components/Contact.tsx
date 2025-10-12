import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        <div className="flex flex-wrap gap-3 animate-fade-in">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <a 
                key={info.label}
                href={info.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Badge className="bg-primary/20 text-primary border-primary hover:bg-primary/30 hover:shadow-neon-strong transition-all duration-300 text-base py-3 px-5 flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {info.label}
                </Badge>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
