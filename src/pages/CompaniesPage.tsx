import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { CompanyCard } from '@/components/company/CompanyCard';
import { companies, domains, searchCompanies } from '@/data/placementData';
import { Search } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function CompaniesPage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [query, setQuery] = useState(initialSearch);
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const filteredCompanies = useMemo(() => {
    let result = query ? searchCompanies(query) : companies;
    if (selectedDomain !== 'all') {
      result = result.filter((c) => c.domain === selectedDomain);
    }
    return result;
  }, [query, selectedDomain]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          {/* Header */}
          <div className="mb-8">
            <h1 className="section-title">All Companies</h1>
            <p className="section-subtitle">
              Browse through companies that have visited our campus for placements.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search companies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-institute pl-10 w-full"
              />
            </div>

            {/* Domain Filter */}
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="input-institute w-full sm:w-48"
            >
              <option value="all">All Domains</option>
              {domains.map((domain) => (
                <option key={domain.id} value={domain.id}>
                  {domain.name}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
          </p>

          {/* Companies Grid */}
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground">
                No companies found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
