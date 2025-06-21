import React from 'react'

export default function Minipro1({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return{
      props:{posts},
    }
}