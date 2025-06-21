import Link from 'next/link';

export default function Home({ articles }) {
  return (
    <div>
      <h1>Top News</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-05-21&sortBy=publishedAt&apiKey=005f667948bc4437b49675dce251bfb7'); // Replace with your news API
    const articles = await res.json();

    return {
      props: { articles },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching top news:', error);
    return {
      props: { articles: [] }, // Return empty array on error
    };
  }
}
