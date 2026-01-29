import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">IIT</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Placement Experience Portal</p>
                <p className="text-xs text-muted-foreground">IIT Bhubaneswar</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A comprehensive resource for placement preparation, featuring domain-wise company insights, 
              interview experiences, and guidance from seniors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/domains" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Explore Domains
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Companies
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Share Experience
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Placement Cell
                </Link>
              </li>
              <li>
                <a href="mailto:placements@iitbbs.ac.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  placements@iitbbs.ac.in
                </a>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Placement Experience Portal | IIT Bhubaneswar
            </p>
            <p className="text-xs text-muted-foreground">
              Made for student preparation and guidance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
