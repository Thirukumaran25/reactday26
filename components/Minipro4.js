// pages/index.js (Homepage)
import { GetStaticProps } from 'next';

const HomePage = ({ articles = [] }) => {
  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <div>
      <h1>Top News</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={`/articles/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-05-21&sortBy=publishedAt&apiKey=005f667948bc4437b49675dce251bfb7');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const articles = await response.json();
    return {
      props: { articles },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: { articles: [] },
      revalidate: 3600, // Revalidate every hour
    };
  }
};

export default HomePage;