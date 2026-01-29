import { Layout } from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'When does the placement season start?',
    answer:
      'The placement season typically begins in August with pre-placement talks and internship drives for pre-final year students, followed by full-time placements from December onwards for final year students.',
  },
  {
    question: 'How can I contribute my experience?',
    answer:
      'Use the "Submit Experience" page to share your interview experience. Fill out the form with details about your journey, OA patterns, interview questions, and tips. Your contribution will be reviewed by the placement cell before being published.',
  },
  {
    question: 'Are the experiences verified?',
    answer:
      'Yes, all submitted experiences go through an admin review process to ensure accuracy, relevance, and appropriateness before being published. We verify the authenticity of submissions while respecting contributor privacy.',
  },
  {
    question: 'Can I submit anonymously?',
    answer:
      'While we collect your name and email for verification purposes, you can choose to have your experience published without your name visible. Just mention this preference in your submission.',
  },
  {
    question: 'How often is the portal updated?',
    answer:
      'The portal is updated regularly as new experiences are submitted and verified. After each placement season, we add comprehensive data from recently placed students.',
  },
  {
    question: 'Can I update or correct my submitted experience?',
    answer:
      'Yes, you can reach out to the placement cell via the Contact page with your request to update or correct any information in your submitted experience.',
  },
  {
    question: 'Are there any resources for off-campus placements?',
    answer:
      'Currently, the portal focuses on on-campus placement experiences. However, many of the preparation tips and interview patterns shared are equally applicable for off-campus opportunities.',
  },
  {
    question: 'How do I report incorrect information?',
    answer:
      'If you notice any incorrect or outdated information, please contact the placement cell through the Contact page. We appreciate your help in maintaining accurate data.',
  },
  {
    question: 'Can alumni access this portal?',
    answer:
      'Yes, the portal is accessible to current students, alumni, and anyone interested in understanding the placement process at IIT Bhubaneswar.',
  },
  {
    question: 'Is there a mobile app for this portal?',
    answer:
      'Currently, we don\'t have a dedicated mobile app, but the website is fully responsive and works well on mobile devices. You can access all features from your phone browser.',
  },
];

export default function FAQPage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="section-title">Frequently Asked Questions</h1>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about placements and the portal.
            </p>
          </div>

          <div className="card-institute p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Still have questions?{' '}
              <a href="/contact" className="link-primary">
                Contact the Placement Cell
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
