import { Link } from 'react-router-dom';
import { Calendar, Briefcase, IndianRupee, ChevronRight } from 'lucide-react';
import { Company } from '@/data/placementData';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link
      to={`/companies/${company.id}`}
      className="card-institute p-6 group block animate-fade-in"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {company.name}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {company.role}
            </span>
            {company.package && (
              <span className="flex items-center gap-1">
                <IndianRupee className="h-4 w-4" />
                {company.package}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {company.yearOfVisit}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="badge-domain capitalize">{company.domain}</span>
            <span className="text-xs text-muted-foreground">
              {company.seniorExperiences.length} experience{company.seniorExperiences.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </Link>
  );
}
