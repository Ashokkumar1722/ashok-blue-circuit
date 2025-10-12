import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ResumeProps {
  isAdmin: boolean;
}

const Resume = ({ isAdmin }: ResumeProps) => {
  const [resumeUrl, setResumeUrl] = useState("https://drive.google.com/file/d/1shfLpV4Yct8ua3YbG1BVFf_hyZD3VJUy/view?usp=drive_link");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newUrl, setNewUrl] = useState("");

  const handleUpdateResume = () => {
    if (!newUrl.trim()) {
      toast.error("Please enter a valid URL");
      return;
    }
    setResumeUrl(newUrl);
    setIsDialogOpen(false);
    toast.success("Resume link updated");
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-border-glow inline-block border-b-2 border-primary pb-2">
          Resume
        </h2>
        <div className="space-y-4 animate-fade-in">
          <p className="text-foreground/80 text-lg mb-6">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon-strong"
              size="lg"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            {isAdmin && (
              <Button 
                onClick={() => {
                  setNewUrl(resumeUrl);
                  setIsDialogOpen(true);
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                size="lg"
              >
                <Upload className="w-5 h-5 mr-2" />
                Update Link
              </Button>
            )}
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-card border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-primary">Update Resume Link</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Enter new resume URL"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className="bg-background border-primary/30"
              />
              <Button 
                onClick={handleUpdateResume}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Update Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Resume;
