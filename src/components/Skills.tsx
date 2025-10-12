import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface SkillsProps {
  isAdmin: boolean;
}

const Skills = ({ isAdmin }: SkillsProps) => {
  const [technicalSkills, setTechnicalSkills] = useState(["Python", "SQL", "HTML"]);
  const [softSkills, setSoftSkills] = useState(["Teamwork", "Leadership", "Adaptability", "Time Management"]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [skillType, setSkillType] = useState<"technical" | "soft">("technical");

  const handleAddSkill = (type: "technical" | "soft") => {
    setSkillType(type);
    setNewSkill("");
    setIsDialogOpen(true);
  };

  const handleSaveSkill = () => {
    if (!newSkill.trim()) {
      toast.error("Please enter a skill name");
      return;
    }

    if (skillType === "technical") {
      setTechnicalSkills([...technicalSkills, newSkill]);
    } else {
      setSoftSkills([...softSkills, newSkill]);
    }
    
    toast.success("Skill added");
    setIsDialogOpen(false);
  };

  const handleRemoveSkill = (skill: string, type: "technical" | "soft") => {
    if (type === "technical") {
      setTechnicalSkills(technicalSkills.filter(s => s !== skill));
    } else {
      setSoftSkills(softSkills.filter(s => s !== skill));
    }
    toast.success("Skill removed");
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-border-glow inline-block border-b-2 border-primary pb-2">
          Skills
        </h2>

        <div className="space-y-8 animate-fade-in">
          <div className="bg-card p-6 rounded-lg border border-primary/30 shadow-neon">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-primary">Technical Skills</h3>
              {isAdmin && (
                <Button
                  size="sm"
                  onClick={() => handleAddSkill("technical")}
                  className="bg-primary/20 text-primary hover:bg-primary/30"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <Badge 
                  key={skill}
                  className="bg-primary/20 text-primary border-primary hover:bg-primary/30 hover:shadow-neon transition-all duration-300 text-base py-2 px-4 group"
                >
                  {skill}
                  {isAdmin && (
                    <button
                      onClick={() => handleRemoveSkill(skill, "technical")}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/30 shadow-neon">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-primary">Soft Skills</h3>
              {isAdmin && (
                <Button
                  size="sm"
                  onClick={() => handleAddSkill("soft")}
                  className="bg-primary/20 text-primary hover:bg-primary/30"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <Badge 
                  key={skill}
                  className="bg-primary/20 text-primary border-primary hover:bg-primary/30 hover:shadow-neon transition-all duration-300 text-base py-2 px-4 group"
                >
                  {skill}
                  {isAdmin && (
                    <button
                      onClick={() => handleRemoveSkill(skill, "soft")}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-card border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-primary">
                Add {skillType === "technical" ? "Technical" : "Soft"} Skill
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Skill name"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveSkill()}
                className="bg-background border-primary/30"
              />
              <Button 
                onClick={handleSaveSkill}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Add Skill
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Skills;
