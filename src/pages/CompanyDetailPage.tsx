import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getCompanyById, getDomainById } from '@/data/placementData';
import {
  ChevronLeft,
  Calendar,
  Briefcase,
  IndianRupee,
  User,
  GraduationCap,
  Target,
  HelpCircle,
  Lightbulb,
  ClipboardList,
  MessageSquare,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function CompanyDetailPage() {
  const { companyId } = useParams<{ companyId: string }>();
  const company = companyId ? getCompanyById(companyId) : undefined;
  const domain = company ? getDomainById(company.domain) : undefined;

  if (!company) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="section-title">Company Not Found</h1>
            <p className="text-muted-foreground mt-2">
              The company you're looking for doesn't exist.
            </p>
            <Link to="/companies" className="btn-institute mt-6 inline-block">
              Back to Companies
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
            to="/companies"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Companies
          </Link>

          {/* Company Header */}
          <div className="card-institute p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {company.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
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
              </div>
              <Link
                to={`/domains/${company.domain}`}
                className="badge-domain self-start"
              >
                {domain?.name || company.domain}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Senior Experiences */}
              <section className="card-institute p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Senior Experiences</h2>
                </div>
                <div className="space-y-6">
                  {company.seniorExperiences.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-primary pl-4">
                      <p className="text-sm text-foreground leading-relaxed">{exp.experience}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {exp.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-3 w-3" />
                          {exp.branch}, Batch {exp.batch}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* OA Details */}
              <section className="card-institute p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Online Assessment (OA)</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Rounds</p>
                    <p className="text-lg font-semibold text-foreground">{company.oaDetails.rounds}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Difficulty</p>
                    <p className={`text-lg font-semibold ${
                      company.oaDetails.difficulty === 'Hard' 
                        ? 'text-destructive' 
                        : company.oaDetails.difficulty === 'Medium'
                        ? 'text-warning'
                        : 'text-success'
                    }`}>
                      {company.oaDetails.difficulty}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {company.oaDetails.topics.map((topic) => (
                      <span key={topic} className="badge-domain">{topic}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Sample Questions</p>
                  <ul className="space-y-2">
                    {company.oaDetails.sampleQuestions.map((q, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Interview Rounds */}
              <section className="card-institute p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Interview Rounds</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {company.interviewRounds.map((round, index) => (
                    <AccordionItem key={index} value={`round-${index}`}>
                      <AccordionTrigger className="text-sm font-medium">
                        Round {index + 1}: {round.type}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground mb-2">Key Topics</p>
                            <div className="flex flex-wrap gap-2">
                              {round.topics.map((topic) => (
                                <span key={topic} className="badge-domain">{topic}</span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground mb-2">Common Questions</p>
                            <ul className="space-y-1">
                              {round.commonQuestions.map((q, i) => (
                                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {q}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Question Bank */}
              <section className="card-institute p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Question Bank</h2>
                </div>
                <div className="space-y-3">
                  {company.questionBank.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <span className={`badge-domain text-xs ${
                        item.category === 'DSA' 
                          ? 'bg-primary/10 text-primary'
                          : item.category === 'Core'
                          ? 'bg-success/10 text-success'
                          : 'bg-warning/10 text-warning-foreground'
                      }`}>
                        {item.category}
                      </span>
                      <p className="text-sm text-foreground flex-1">{item.question}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Suggestions */}
              <section className="card-institute p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Tips to Ace</h2>
                </div>
                <div className="space-y-4">
                  {company.suggestions.map((suggestion, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <h3 className="text-sm font-medium text-foreground">{suggestion.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{suggestion.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Stats */}
              <div className="card-institute p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Quick Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">OA Rounds</span>
                    <span className="font-medium text-foreground">{company.oaDetails.rounds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interview Rounds</span>
                    <span className="font-medium text-foreground">{company.interviewRounds.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experiences Shared</span>
                    <span className="font-medium text-foreground">{company.seniorExperiences.length}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="font-semibold">Have an experience to share?</h3>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  Help your juniors by adding your interview experience.
                </p>
                <Link
                  to="/submit"
                  className="mt-4 inline-block w-full text-center bg-card text-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-card/90 transition-colors"
                >
                  Submit Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
