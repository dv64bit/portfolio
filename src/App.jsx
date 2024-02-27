import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Clients from "./components/Clients";
import CompanyCard from "./components/CompanyCard";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Button />
        <Clients />
        <CompanyCard />
        <Footer />
      </div>
    </>
  );
};

export default App;
