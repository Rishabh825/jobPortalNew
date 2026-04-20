import { MapPin, Clock, IndianRupee, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import type { Job } from "@/data/jobs";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { applicationAPI } from "@/lib/api";
import { useState } from "react";
import { ApplicationModal } from "./ApplicationModal";

const typeColors: Record<string, string> = {
  "Full-time": "bg-success/10 text-success border-success/20",
  "Part-time": "bg-warning/10 text-warning border-warning/20",
  Contract: "bg-accent/10 text-accent border-accent/20",
  Remote: "bg-primary/10 text-primary border-primary/20",
};

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast({ title: "Please login", description: "You need to login to apply for jobs", variant: "destructive" });
      navigate("/login");
      return;
    }
    setShowModal(true);
  };

  const handleModalSubmit = async (details: { cgpa: string; resume: string; resumeFileBase64?: string; resumeFilename?: string; otherQualifications: string }) => {
    setLoading(true);
    setShowModal(false);
    try {
      const result = await applicationAPI.applyJob(job.id, details);
      if (result.success) {
        toast({ title: "Application Submitted!", description: `You applied for ${job.title}` });
      } else {
        toast({ title: "Cannot Apply", description: result.error || "Failed to apply", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit application", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const requirements = Array.isArray(job.requirements) ? job.requirements : [];

  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
          {job.company.charAt(0)}
        </div>
        <Badge variant="outline" className={typeColors[job.type] || ""}>
          {job.type}
        </Badge>
      </div>

      <h3 className="mb-1 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {job.title}
      </h3>
      <Link
        to={`/company/${encodeURIComponent(job.company)}`}
        className="mb-2 inline-block text-sm text-primary hover:underline"
      >
        {job.company}
      </Link>
      <p className="mb-1 text-xs text-muted-foreground">
        Required: <span className="font-medium text-foreground">{job.required_qualification || job.requiredQualification}</span>
      </p>

      <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <IndianRupee className="h-3.5 w-3.5" /> {job.salary}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {job.posted}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {requirements.slice(0, 3).map((req) => (
          <span key={req} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            {req}
          </span>
        ))}
        {requirements.length > 3 && (
          <span className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
            +{requirements.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="h-3.5 w-3.5" /> {job.applicants || 0} applicants
        </span>
        <Button size="sm" variant="hero" onClick={handleApplyClick} disabled={loading}>
          {loading ? "Applying..." : "Apply Now"}
        </Button>
      </div>

      <ApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleModalSubmit}
        jobTitle={job.title}
      />
    </div>
  );
};

export default JobCard;
