import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Menu, X, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import { authAPI } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await authAPI.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast({ title: "Logged out", description: "See you next time!" });
      setUser(null);
      navigate("/");
      window.location.reload();
    } catch (error) {
      toast({ title: "Error", description: "Failed to logout", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          JobVault
          <span className="ml-1 text-xs font-normal text-muted-foreground">smart matching · dream jobs</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">Home</Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Jobs</Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Companies</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="h-4 w-4" /> {user.name}
              </span>
              <Button variant="ghost" size="sm" onClick={handleLogout} disabled={loading}>
                <LogOut className="h-4 w-4" /> {loading ? "Logging out..." : "Logout"}
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" className="rounded-full px-6" asChild>
                <Link to="/login">Sign in</Link>
              </Button>
              <Button variant="default" size="sm" className="rounded-full px-6" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-sm font-medium text-muted-foreground">Home</Link>
            <Link to="/" className="text-sm font-medium text-muted-foreground">Jobs</Link>
            <Link to="/" className="text-sm font-medium text-muted-foreground">Companies</Link>
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
                <Button variant="ghost" size="sm" onClick={handleLogout} disabled={loading}>
                  {loading ? "Logging out..." : "Logout"}
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-muted-foreground">Sign In</Link>
                <Link to="/register" className="text-sm font-medium text-primary">Register</Link>
              </>
            )}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
