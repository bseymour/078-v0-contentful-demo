import { getNewsArticles } from "@/lib/contentful";
import { NewsCard } from "@/components/news-card";
import { WeatherWidget } from "@/components/weather-widget";

export default async function Home() {
  const articles = await getNewsArticles();

  return (
    <div className="min-h-screen bg-background">
      <WeatherWidget />
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
        </div>
      </main>
      
    </div>
  );
}
