import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { toast } from "sonner";

interface AdminLoginProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: () => void;
}

const AdminLogin = ({ open, onOpenChange, onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState("");
  const ADMIN_PASSWORD = "Ashok$17";

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      onLogin();
      onOpenChange(false);
      setPassword("");
      toast.success("Admin mode activated");
    } else {
      toast.error("Incorrect password");
      setPassword("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <Lock className="w-5 h-5" />
            Admin Login
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="bg-background border-primary/30 focus:border-primary"
          />
          <Button 
            onClick={handleLogin}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
          >
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;
