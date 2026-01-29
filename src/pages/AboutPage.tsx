import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="section-title mb-8">About the Portal</h1>

          <div className="prose prose-slate max-w-none space-y-6">
            <div className="card-institute p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Our Mission</h2>
              <p className="text-muted-foreground">
                The Placement Experience Portal is an official initiative by IIT Bhubaneswar to help students prepare 
                effectively for campus placements. We aim to bridge the information gap by providing authentic, 
                first-hand experiences from seniors who have successfully navigated the placement process.
              </p>
            </div>

            <div className="card-institute p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">What We Offer</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Domain-wise categorization of companies for easy navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Detailed interview experiences shared by placed seniors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Online Assessment patterns, topics, and sample questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Interview round breakdowns with common questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Preparation tips and suggestions from successful candidates</span>
                </li>
              </ul>
            </div>

            <div className="card-institute p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Quality Assurance</h2>
              <p className="text-muted-foreground">
                All submitted experiences go through a review process by the placement cell team to ensure 
                accuracy, relevance, and quality. We maintain the authenticity of experiences while 
                protecting the privacy of contributors who wish to remain anonymous.
              </p>
            </div>

            <div className="card-institute p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Contribute</h2>
              <p className="text-muted-foreground mb-4">
                If you've been placed and want to help your juniors, we encourage you to share your 
                experience. Your insights can make a significant difference in someone's preparation journey.
              </p>
              <Link
                to="/submit"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Submit your experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
