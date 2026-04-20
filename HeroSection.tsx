import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  locationQuery: string;
  setLocationQuery: (q: string) => void;
  onSearch: () => void;
}

const HeroSection = ({ searchQuery, setSearchQuery, onSearch }: HeroSectionProps) => {
  return (
    <section className="flex min-h-[420px] items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl animate-fade-in">
          Smart job matching for freshers 🎯
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
          We match your qualifications with job requirements automatically.
          <br />
          Apply only to jobs you're qualified for!
        </p>

        <div
          className="mx-auto flex max-w-2xl flex-col gap-0 overflow-hidden rounded-full border border-border bg-card shadow-sm sm:flex-row animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-1 items-center gap-2 px-6 py-4">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search fresher jobs, internships, roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button
            variant="default"
            size="lg"
            className="m-1.5 rounded-full px-8 font-semibold"
            onClick={onSearch}
          >
            Find Jobs
          </Button>
        </div>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-muted-foreground">Popular:</span>
          {["Graduate Trainee", "Software Engineer", "Marketing Fresher", "Data Analyst"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
