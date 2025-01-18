import { Link } from "react-router-dom";
import { Home, PlusSquare, User, Search, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-pink-500">
            Social Media
          </Link>
          <div className="hidden sm:block flex-1 max-w-xs mx-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              <Home className="h-6 w-6" />
            </Link>
            <Link
              to="/create-post"
              className="text-gray-500 hover:text-gray-700"
            >
              <PlusSquare className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-500 hover:text-gray-700">
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/auth/login"
              className="text-gray-500 hover:text-gray-700"
            >
              <LogIn className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
