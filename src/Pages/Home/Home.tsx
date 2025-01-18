import Post from "@/components/Posts/Post";

const posts = [
  {
    id: 1,
    username: "johndoe",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    image:
      "https://images.unsplash.com/photo-1726502426120-942a744df0d3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful day in nature! 🌿🌳",
    likes: 42,
  },
  {
    id: 2,
    username: "janedoe",
    userImage: "https://randomuser.me/api/portraits/women/1.jpg",
    image:
      "https://images.unsplash.com/photo-1689258281627-23b62dc2ee02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "City vibes 🏙️",
    likes: 89,
  },
  {
    id: 3,
    username: "alexsmith",
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
    image:
      "https://images.unsplash.com/photo-1635974064616-b09505293645?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Delicious meal! 😋🍽️",
    likes: 67,
  },
  {
    id: 4,
    username: "emilybrown",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    image:
      "https://images.unsplash.com/photo-1566024349847-9bb4b2deb743?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Adventure awaits! ✈️🌍",
    likes: 120,
  },
];

const Home = () => {
  return (
    <div className="">
      <h1 className="text-bold text-xl pb-4 text-center">Your Feed</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;
