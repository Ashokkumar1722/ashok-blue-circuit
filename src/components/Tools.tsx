import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";

interface ToolsProps {
  isAdmin: boolean;
}

const Tools = ({ isAdmin }: ToolsProps) => {
  const [tools, setTools] = useState([
    "MATLAB",
    "VS Code",
    "Arduino IDE",
    "Proteus",
    "PyCharm"
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTool, setNewTool] = useState("");

  const handleAddTool = () => {
    setIsDialogOpen(true);
  };

  const handleSaveTool = () => {
    if (newTool.trim()) {
      setTools([...tools, newTool.trim()]);
      setNewTool("");
      setIsDialogOpen(false);
    }
  };

  const handleRemoveTool = (toolToRemove: string) => {
    setTools(tools.filter(tool => tool !== toolToRemove));
  };
  return (
    <>
      <section id="tools" className="py-20 px-4 bg-secondary/20">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary animate-border-glow inline-block border-b-2 border-primary pb-2">
              Tools Used
            </h2>
            {isAdmin && (
              <Button
                onClick={handleAddTool}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Tool
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-3 animate-fade-in">
            {tools.map((tool) => (
              <Badge 
                key={tool}
                className="bg-primary/20 text-primary border-primary hover:bg-primary/30 hover:shadow-neon-strong transition-all duration-300 text-base py-3 px-5 relative group"
              >
                {tool}
                {isAdmin && (
                  <button
                    onClick={() => handleRemoveTool(tool)}
                    className="ml-2 hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-primary">Add New Tool</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter tool name"
              value={newTool}
              onChange={(e) => setNewTool(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveTool()}
              className="bg-background border-primary/30 focus:border-primary"
            />
            <Button 
              onClick={handleSaveTool}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
            >
              Add Tool
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Tools;
