import { Layout } from '@/components/layout/Layout';
import { domains, companies } from '@/data/placementData';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function SubmitExperiencePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    branch: '',
    company: '',
    domain: '',
    role: '',
    package: '',
    yearOfVisit: new Date().getFullYear().toString(),
    experience: '',
    oaTopics: '',
    oaQuestions: '',
    interviewQuestions: '',
    suggestions: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Experience submitted successfully!', {
      description: 'Your experience will be reviewed and published soon.',
    });
    
    setFormData({
      name: '',
      email: '',
      batch: '',
      branch: '',
      company: '',
      domain: '',
      role: '',
      package: '',
      yearOfVisit: new Date().getFullYear().toString(),
      experience: '',
      oaTopics: '',
      oaQuestions: '',
      interviewQuestions: '',
      suggestions: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="section-title">Submit Your Experience</h1>
            <p className="section-subtitle mx-auto">
              Share your placement journey to help juniors prepare better. All submissions are reviewed before publishing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-institute p-6 md:p-8 space-y-6">
            {/* Personal Info */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="your.email@iitbbs.ac.in"
                  />
                </div>
                <div>
                  <label htmlFor="batch" className="block text-sm font-medium text-foreground mb-1">
                    Batch *
                  </label>
                  <input
                    type="text"
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="e.g., 2024"
                  />
                </div>
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-foreground mb-1">
                    Branch *
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="e.g., Computer Science"
                  />
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Company Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="e.g., Google"
                  />
                </div>
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-foreground mb-1">
                    Domain *
                  </label>
                  <select
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                  >
                    <option value="">Select domain</option>
                    {domains.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">
                    Role Offered *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="e.g., Software Engineer"
                  />
                </div>
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-foreground mb-1">
                    Package (CTC)
                  </label>
                  <input
                    type="text"
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="input-institute w-full"
                    placeholder="e.g., ₹25 LPA"
                  />
                </div>
                <div>
                  <label htmlFor="yearOfVisit" className="block text-sm font-medium text-foreground mb-1">
                    Year of Visit *
                  </label>
                  <input
                    type="text"
                    id="yearOfVisit"
                    name="yearOfVisit"
                    value={formData.yearOfVisit}
                    onChange={handleChange}
                    required
                    className="input-institute w-full"
                    placeholder="e.g., 2024"
                  />
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Experience Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-1">
                    Your Placement Journey *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-institute w-full resize-none"
                    placeholder="Describe your overall experience, preparation strategy, and key learnings..."
                  />
                </div>
                <div>
                  <label htmlFor="oaTopics" className="block text-sm font-medium text-foreground mb-1">
                    OA Topics & Difficulty
                  </label>
                  <textarea
                    id="oaTopics"
                    name="oaTopics"
                    value={formData.oaTopics}
                    onChange={handleChange}
                    rows={3}
                    className="input-institute w-full resize-none"
                    placeholder="Topics covered in online assessment, number of rounds, difficulty level..."
                  />
                </div>
                <div>
                  <label htmlFor="oaQuestions" className="block text-sm font-medium text-foreground mb-1">
                    Sample OA Questions
                  </label>
                  <textarea
                    id="oaQuestions"
                    name="oaQuestions"
                    value={formData.oaQuestions}
                    onChange={handleChange}
                    rows={3}
                    className="input-institute w-full resize-none"
                    placeholder="List any questions you remember from the OA..."
                  />
                </div>
                <div>
                  <label htmlFor="interviewQuestions" className="block text-sm font-medium text-foreground mb-1">
                    Interview Questions
                  </label>
                  <textarea
                    id="interviewQuestions"
                    name="interviewQuestions"
                    value={formData.interviewQuestions}
                    onChange={handleChange}
                    rows={4}
                    className="input-institute w-full resize-none"
                    placeholder="Questions asked in different interview rounds (technical, HR, etc.)..."
                  />
                </div>
                <div>
                  <label htmlFor="suggestions" className="block text-sm font-medium text-foreground mb-1">
                    Tips & Suggestions
                  </label>
                  <textarea
                    id="suggestions"
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleChange}
                    rows={3}
                    className="input-institute w-full resize-none"
                    placeholder="Your suggestions for juniors preparing for this company..."
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-4">
                By submitting, you agree that your experience will be reviewed and may be edited for clarity before publishing.
                Your email will not be displayed publicly.
              </p>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? 'Submitting...' : 'Submit Experience'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
