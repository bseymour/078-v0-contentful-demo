import { getNewsArticles } from "@/lib/contentful";
import { NewsCard } from "@/components/news-card";
import { LinkUnfurl } from "@/components/LinkUnfurl";
import { Suspense } from "react";

// Add noStore to prevent static rendering
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
  // Prevent static rendering
  noStore();
  
  const articles = await getNewsArticles();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
          {/* Add fallback for Suspense */}
          <Suspense fallback={<div>Loading link preview...</div>}>
            <LinkUnfurl url="https://vercel.com" />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
