import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl font-display font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="btn-institute inline-flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
