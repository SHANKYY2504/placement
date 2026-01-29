import { Layout } from '@/components/layout/Layout';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="section-title mb-8">Contact Placement Cell</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="card-institute p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:placements@iitbbs.ac.in"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      placements@iitbbs.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+916742494013"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 674 249 4013
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Career Development & Placement Cell<br />
                      IIT Bhubaneswar<br />
                      Argul, Jatni<br />
                      Khurda - 752050, Odisha
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-institute p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick Links</h2>
              <div className="space-y-3">
                <a
                  href="https://www.iitbbs.ac.in/placement.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Official Placement Page
                </a>
                <a
                  href="https://www.iitbbs.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  IIT Bhubaneswar Website
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-institute p-6 mt-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-institute w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-institute w-full"
                    placeholder="your.email@iitbbs.ac.in"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input-institute w-full"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-institute w-full resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-institute">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
