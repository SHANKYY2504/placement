import { Layout } from '@/components/layout/Layout';
import { DomainCard } from '@/components/home/DomainCard';
import { domains } from '@/data/placementData';

export default function DomainsPage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mb-8">
            <h1 className="section-title">All Domains</h1>
            <p className="section-subtitle">
              Browse placement opportunities across different engineering and technology domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain, index) => (
              <div key={domain.id} style={{ animationDelay: `${index * 0.05}s` }}>
                <DomainCard domain={domain} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
