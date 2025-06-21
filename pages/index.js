// pages/index.js
import React from "react";

function Home1({ featuredPosts = [] }) {
  if (!featuredPosts || featuredPosts.length === 0) {
    return <p>No featured posts found.</p>;
  }

  return (
    <div>
      <div className="featured-posts">
        <h2>Featured Posts</h2>
        {featuredPosts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://example.com/api/featured-posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const featuredPosts = await response.json();
    return {
      props: { featuredPosts },
    };
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return {
      props: { featuredPosts: [] },
    };
  }
}

export default Home1;