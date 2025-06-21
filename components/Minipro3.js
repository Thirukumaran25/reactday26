
"use client";

import { useRouter } from 'next/navigation';

export default function UserProfile({ user }) {
  const router = useRouter();

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={user.avatar || '/default-avatar.png'} 
          alt={`${user.name}'s avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-gray-700">About</h2>
          <p className="text-gray-600">{user.bio || 'No bio available'}</p>
        </div>
        
        <div>
          <h2 className="font-semibold text-gray-700">Details</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Username: {user.username}</li>
            <li>Joined: {new Date(user.createdAt).toLocaleDateString()}</li>
            {user.location && <li>Location: {user.location}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://api.example.com/users/${id}`);
    
    if (!res.ok) {
      throw new Error(`User  not found (status: ${res.status})`);
    }
    
    const user = await res.json();
    
    return {
      props: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          bio: user.bio,
          location: user.location,
          createdAt: user.createdAt || new Date().toISOString(),
        },
      },
    };
  } catch (error) {
    console.error('Error fetching user:', error);
    
    return {
      notFound: true,
    };
  }
}
