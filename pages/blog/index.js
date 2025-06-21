// pages/blog/index.js
import React from "react";

function BlogList({ posts = [] }) {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://example.com/api/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    return {
      props: { posts },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: { posts: [] },
      revalidate: 3600, // Revalidate every hour
    };
  }
}

export default BlogList;