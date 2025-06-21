// pages/articles/[id].js
export default function Article({ article }) {
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published on:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-05-21&sortBy=publishedAt&apiKey=005f667948bc4437b49675dce251bfb7/${id}`); // Replace with your news API
    const article = await res.json();

    return {
      props: { article },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true,
    };
  }
}
