import { Link } from 'react-router-dom';
import { TrendingUp, Code, Building, Cog, Zap, Cpu, BarChart3, ChevronRight } from 'lucide-react';
import { Domain } from '@/data/placementData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Code,
  Building,
  Cog,
  Zap,
  Cpu,
  BarChart3,
};

interface DomainCardProps {
  domain: Domain;
}

export function DomainCard({ domain }: DomainCardProps) {
  const Icon = iconMap[domain.icon] || Code;

  return (
    <Link
      to={`/domains/${domain.id}`}
      className="card-institute p-6 group block animate-fade-in"
      style={{ animationDelay: '0.1s' }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {domain.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {domain.description}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="badge-domain">
              {domain.companyCount} companies
            </span>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
}
