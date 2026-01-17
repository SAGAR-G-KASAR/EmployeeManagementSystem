import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Particles from "../Components/Particles";
import { ScrollRestoration } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="relative min-h-screen bg-black">
        {/* For Background Animation */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
