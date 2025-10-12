import { Badge } from "@/components/ui/badge";

const tools = [
  "MATLAB",
  "VS Code",
  "Arduino IDE",
  "Proteus",
  "PyCharm"
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-border-glow inline-block border-b-2 border-primary pb-2">
          Tools Used
        </h2>
        <div className="flex flex-col gap-4 animate-fade-in">
          {tools.map((tool) => (
            <Badge 
              key={tool}
              className="bg-primary/20 text-primary border-primary hover:bg-primary/30 hover:shadow-neon-strong transition-all duration-300 text-xl py-4 px-6 justify-center"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
