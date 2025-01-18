import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/Posts/CreatePost";
import UserProfile from "./Pages/User/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        {/* Routes go here */}
        <Routes>
          {/* Authenticate Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />

          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
