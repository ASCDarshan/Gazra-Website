/* eslint-disable react/prop-types */
import Navbar from "../components/shared/Navbar";
import ScrollToTop from "../components/UI/ScrollToTop";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MainLayout;
