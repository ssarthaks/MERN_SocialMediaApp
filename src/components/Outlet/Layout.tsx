import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <div className="space-y-16 min-h-screen">
      <Navbar />
      <Container>
        <main className="pt-10">
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
