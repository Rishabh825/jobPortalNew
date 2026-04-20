import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: { cgpa: string; resume: string; resumeFileBase64?: string; resumeFilename?: string; otherQualifications: string }) => void;
  jobTitle: string;
}

export const ApplicationModal = ({ isOpen, onClose, onSubmit, jobTitle }: ApplicationModalProps) => {
  const [cgpa, setCgpa] = useState("");
  const [resume, setResume] = useState("");
  const [resumeFileBase64, setResumeFileBase64] = useState<string | undefined>();
  const [resumeFilename, setResumeFilename] = useState<string | undefined>();
  const [otherQualifications, setOtherQualifications] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setResumeFilename(file.name);
    // Use fallback to original text if they clear it but maybe they can't.
    // Setting dummy URL text to override validation if file is selected
    setResume(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setResumeFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ cgpa, resume, resumeFileBase64, resumeFilename, otherQualifications });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Please provide your details below to submit your application.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="cgpa" className="text-sm font-medium">
              CGPA
            </label>
            <Input
              id="cgpa"
              placeholder="e.g. 8.5"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="resumeFile" className="text-sm font-medium">
              Resume Attachment (PDF, DOCX)
            </label>
            <Input
              id="resumeFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="qualifications" className="text-sm font-medium">
              Other Qualifications
            </label>
            <Textarea
              id="qualifications"
              placeholder="Mention any certifications or related skills..."
              value={otherQualifications}
              onChange={(e) => setOtherQualifications(e.target.value)}
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="hero">
              Confirm Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
