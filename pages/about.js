// pages/about.js
import Link from 'next/link';

function About() {
  return (
    <div className="container">
      <nav>
        <Link href="/">Home (SSG)</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
}

export default About;