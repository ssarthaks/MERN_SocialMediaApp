import { useState } from "react";
import ProfilePosts from "@/components/Posts/ProfilePosts";

const userPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566024349847-9bb4b2deb743?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Enjoying the weekend",
    likes: 56,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1635974064616-b09505293645?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "New adventure",
    likes: 72,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Enjoying the weekend",
    likes: 56,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "New adventure",
    likes: 72,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1566023967456-785e9a45c537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Enjoying the weekend",
    likes: 56,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1566024212882-e5998ba2d0d5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "New adventure",
    likes: 72,
  },
];

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Photography enthusiast | Travel lover");
  const [editName, setEditName] = useState(name);
  const [editBio, setEditBio] = useState(bio);

  const handleSave = () => {
    setName(editName);
    setBio(editBio);
    console.log("Profile updated:", { name: editName, bio: editBio });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(name);
    setEditBio(bio);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Profile Section */}
      <div className="flex gap-10 items-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <div className="text-left">
          <div className="mb-2">
            <h1 className="font-bold text-xl ">{name}</h1>
            <span className="text-sm text-gray-500">
              ({userPosts.length} posts)
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">{bio}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm hover:bg-gray-300"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Posts Section */}
      <h1 className="text-xl mb-4">Your Posts</h1>
      <div className="grid grid-cols-3 gap-1">
        {userPosts.map((post) => (
          <ProfilePosts
            key={post.id}
            username={name}
            userImage="https://randomuser.me/api/portraits/men/1.jpg"
            {...post}
          />
        ))}
      </div>

      {/* Modal for Editing Profile */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96 transform transition-all ease-out duration-300 scale-100">
            <h2 className="font-bold text-xl mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                value={editBio}
                onChange={(e) => setEditBio(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                rows={4}
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 py-1 px-4 rounded-md text-sm hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-1 px-4 rounded-md text-sm hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
