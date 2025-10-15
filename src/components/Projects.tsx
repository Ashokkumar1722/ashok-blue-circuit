import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Plus, Edit2, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
}

interface ProjectsProps {
  isAdmin: boolean;
}

const Projects = ({ isAdmin }: ProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Patient Consistent Health Monitoring system using STM32",
      description: "Real-time health monitoring system with STM32 microcontroller for continuous patient data tracking and analysis.",
      githubUrl: "https://github.com/Ashokkumar1722"
    },
    {
      id: 2,
      title: "Web-Based Face Recognition Attendance System",
      description: "Automated attendance system using facial recognition technology for efficient and contactless tracking.",
      githubUrl: "https://github.com/Ashokkumar1722"
    },
    {
      id: 3,
      title: "GoTogether – Carpooling Web Platform",
      description: "Web platform connecting drivers and passengers for sustainable and cost-effective commuting.",
      githubUrl: "https://github.com/Ashokkumar1722"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ title: "", description: "", githubUrl: "" });

  const handleAddProject = () => {
    setEditingProject(null);
    setFormData({ title: "", description: "", githubUrl: "" });
    setIsDialogOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setFormData({ title: project.title, description: project.description, githubUrl: project.githubUrl });
    setIsDialogOpen(true);
  };

  const handleSaveProject = () => {
    if (!formData.title || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...formData } : p));
      toast.success("Project updated");
    } else {
      setProjects([...projects, { id: Date.now(), ...formData }]);
      toast.success("Project added");
    }
    setIsDialogOpen(false);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
    toast.success("Project deleted");
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-border-glow inline-block border-b-2 border-primary pb-2">
          Projects
        </h2>
        {isAdmin && (
          <Button 
            onClick={handleAddProject}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon mb-8"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border-primary/30 shadow-neon hover:shadow-neon-strong transition-all duration-300 p-6 relative group">
              <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-4 min-h-[100px]">{project.description}</p>
              <Button 
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              
              {isAdmin && (
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEditProject(project)}
                    className="h-8 w-8 bg-background/80 hover:bg-background"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDeleteProject(project.id)}
                    className="h-8 w-8 bg-background/80 hover:bg-background text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-card border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-primary">
                {editingProject ? "Edit Project" : "Add New Project"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Project Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-background border-primary/30"
              />
              <Textarea
                placeholder="Project Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-background border-primary/30 min-h-[100px]"
              />
              <Input
                placeholder="GitHub URL"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="bg-background border-primary/30"
              />
              <Button 
                onClick={handleSaveProject}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Save Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
