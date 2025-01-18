import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, X } from "lucide-react";

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

const ProfilePosts = ({ image, likes }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleModalClose = (e: React.MouseEvent) => {
    // Close modal if the user clicks outside the image content
    if ((e.target as HTMLElement).classList.contains("modal-background")) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg">
      {/* Post Image */}
      <img
        src={image || "/placeholder.svg"}
        alt="Post"
        className="w-full object-cover cursor-pointer rounded-lg"
        style={{ maxHeight: "200px" }}
        onClick={toggleModal}
      />

      {/* Modal for Full Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 modal-background"
          onClick={handleModalClose}
        >
          <div className="relative bg-white rounded-lg w-full max-w-3xl max-h-[700px] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white text-2xl bg-gray-200 rounded-full p-2"
            >
              <X className="w-4 h-4 text-black" />
            </button>

            {/* Image */}
            <img
              src={image || "/placeholder.svg"}
              alt="Post"
              className="w-full object-cover cursor-pointer"
              style={{ maxHeight: "500px" }}
              onClick={toggleModal}
            />

            {/* Post Actions Inside Modal */}
            <div className="flex justify-between text-gray-700 p-4">
              <div className="flex space-x-4 items-center justify-center">
                <button
                  onClick={handleLike}
                  className="flex gap-2 items-center"
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
                    }`}
                  />
                  <p className="font-semibold">{likeCount}</p>
                </button>
                <button>
                  <MessageCircle className="h-6 w-6 text-gray-700" />
                </button>
                <button>
                  <Send className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <button>
                <Bookmark className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePosts;
