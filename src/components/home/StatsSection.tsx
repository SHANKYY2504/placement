import { Building2, Users, FileText, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '100+',
    label: 'Companies Visited',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Students Placed',
  },
  {
    icon: FileText,
    value: '250+',
    label: 'Experiences Shared',
  },
  {
    icon: Award,
    value: '7',
    label: 'Domains Covered',
  },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
