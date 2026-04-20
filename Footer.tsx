import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            JobVault
          </div>
          <p className="text-sm text-muted-foreground">
            Smart matching · Dream jobs. Your career journey starts here.
          </p>
        </div>
        {[
          { title: "For Job Seekers", links: ["Browse Jobs", "Companies", "Career Advice"] },
          { title: "For Employers", links: ["Post a Job", "Pricing", "Resources"] },
          { title: "Company", links: ["About Us", "Contact", "Privacy Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-8 border-t border-border px-4 pt-8 text-center text-xs text-muted-foreground">
        © 2026 JobVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
