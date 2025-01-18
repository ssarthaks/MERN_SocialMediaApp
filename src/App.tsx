import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/Posts/CreatePost";
import UserProfile from "./Pages/User/UserProfile";
import Layout from "./components/Outlet/Layout";

function App() {
  return (
    <BrowserRouter>
      <main>
        {/* Routes go here */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* User Routes */}
            <Route index element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile" element={<UserProfile />} />

            {/* Authenticate Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
