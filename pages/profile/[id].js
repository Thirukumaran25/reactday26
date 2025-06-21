import Link from 'next/link';

export default function Profile({ user }) {
  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <nav>
        <Link href="/">
          <a className="nav-link">Home (SSG)</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">About (SSG)</a>
        </Link>
      </nav>

      <div className="profile">
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  
  if (!res.ok) {
    return { notFound: true };
  }

  const user = await res.json();
  return { props: { user } };
}
