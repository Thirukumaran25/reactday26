import Link from 'next/link';

export default function BlogPost({ post }) {
  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      <nav>
        <Link href="/">
          <a className="nav-link">Home (SSG)</a>
        </Link>
        <Link href="/blog">
          <a className="nav-link">Back to Blog (SSG)</a>
        </Link>
      </nav>

      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  
  if (!res.ok) {
    return { notFound: true };
  }

  const post = await res.json();
  return { props: { post } };
}
