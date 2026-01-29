import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { CompanyCard } from '@/components/company/CompanyCard';
import { getDomainById, getCompaniesByDomain } from '@/data/placementData';
import { ChevronLeft } from 'lucide-react';

export default function DomainDetailPage() {
  const { domainId } = useParams<{ domainId: string }>();
  const domain = domainId ? getDomainById(domainId) : undefined;
  const companies = domainId ? getCompaniesByDomain(domainId) : [];

  if (!domain) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="section-title">Domain Not Found</h1>
            <p className="text-muted-foreground mt-2">
              The domain you're looking for doesn't exist.
            </p>
            <Link to="/domains" className="btn-institute mt-6 inline-block">
              Back to Domains
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          {/* Breadcrumb */}
          <Link
            to="/domains"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Domains
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="section-title">{domain.name}</h1>
            <p className="section-subtitle">{domain.description}</p>
            <div className="mt-4">
              <span className="badge-domain">{companies.length} companies</span>
            </div>
          </div>

          {/* Companies Grid */}
          {companies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground">
                No companies added for this domain yet. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
