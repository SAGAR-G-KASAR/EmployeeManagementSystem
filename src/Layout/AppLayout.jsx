import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
