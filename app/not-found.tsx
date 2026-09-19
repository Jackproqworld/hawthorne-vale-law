import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "404",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <main className="section">
      <div className="container narrow-content center-text">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>
          The page you are looking for may have moved or no longer exists. Visit the
          homepage to continue navigating our site.
        </p>
        <a href="/" className="btn btn-primary">
          Return home
        </a>
      </div>
    </main>
  );
}
