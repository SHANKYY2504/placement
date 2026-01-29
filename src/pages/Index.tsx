import { Layout } from '@/components/layout/Layout';
import { SearchBar } from '@/components/home/SearchBar';
import { DomainCard } from '@/components/home/DomainCard';
import { StatsSection } from '@/components/home/StatsSection';
import { domains } from '@/data/placementData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent to-background">
        <div className="container-narrow text-center">
          <div className="animate-fade-in">
            <span className="badge-domain mb-4 inline-block">
              Official IIT Bhubaneswar Resource
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              Placement Company<br className="hidden sm:block" /> Experience Portal
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Domain-wise company insights, interview experiences, and preparation guidance from seniors who cracked the placements.
            </p>
          </div>
          
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <SearchBar />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span>Popular:</span>
            <Link to="/companies?search=google" className="link-primary">Google</Link>
            <Link to="/companies?search=goldman" className="link-primary">Goldman Sachs</Link>
            <Link to="/companies?search=microsoft" className="link-primary">Microsoft</Link>
            <Link to="/domains/sde" className="link-primary">SDE Roles</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Domains Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">Explore by Domain</h2>
              <p className="section-subtitle">
                Find companies and experiences categorized by your field of interest.
              </p>
            </div>
            <Link
              to="/domains"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View all domains
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain, index) => (
              <div key={domain.id} style={{ animationDelay: `${index * 0.05}s` }}>
                <DomainCard domain={domain} />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              to="/domains"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View all domains
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
            Got Placed? Share Your Experience
          </h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            Help your juniors prepare better by sharing your interview experience, questions asked, and preparation tips.
          </p>
          <Link
            to="/submit"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-card text-foreground px-6 py-3 font-medium hover:bg-card/90 transition-colors"
          >
            Submit Your Experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-8">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Common questions about placements at IIT Bhubaneswar.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'When does the placement season start?',
                a: 'The placement season typically begins in August with pre-placement talks and internship drives, followed by full-time placements from December onwards.',
              },
              {
                q: 'How can I contribute my experience?',
                a: 'Use the "Submit Experience" page to share your interview experience. Your contribution will be reviewed and added to help future batches.',
              },
              {
                q: 'Are the experiences verified?',
                a: 'Yes, all submitted experiences go through an admin review process to ensure accuracy and relevance before being published.',
              },
            ].map((faq, index) => (
              <div key={index} className="card-institute p-6">
                <h3 className="font-medium text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View all FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
