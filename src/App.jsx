import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import ClientsReview from "./components/ClientsReview";
import Cards from "./components/Cards";
import Eyes2 from "./components/Eyes2";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <ClientsReview />
      <Cards />
      <Eyes2 />
      <Footer />
    </div>
  );
}
export default App;
