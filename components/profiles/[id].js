// pages/profiles/[id].js
export default function UserProfile({ user }) {
  if (!user) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold">User not found</h1>
        <p className="text-gray-600">The requested profile doesn't exist</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={user.avatar} 
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
          <p className="text-gray-600">{user.bio}</p>
        </div>
        
        <div>
          <h2 className="font-semibold text-gray-700">Details</h2>
          <ul className="text-gray-600 space-y-1">
            <li>Username: {user.username}</li>
            <li>Location: {user.location}</li>
            <li>Joined: {new Date(user.createdAt).toLocaleDateString()}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// In-memory database of profiles
const profiles = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Software engineer passionate about web development',
    location: 'San Francisco, CA',
    createdAt: '2023-01-15'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    username: 'janesmith',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'UX designer creating beautiful user experiences',
    location: 'New York, NY',
    createdAt: '2023-02-20'
  },
  {
    id: '3',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    username: 'alexj',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'Product manager building innovative solutions',
    location: 'Austin, TX',
    createdAt: '2023-03-10'
  }
]

export async function getServerSideProps(context) {
  const { id } = context.params
  
  // Find the user profile matching the ID
  const user = profiles.find(profile => profile.id === id)
  
  // If no user found, return notFound: true to show 404 page
  if (!user) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      user
    }
  }
}
