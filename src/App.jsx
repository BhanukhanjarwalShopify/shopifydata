import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div id="features">
          <HeroSection />
        </div>
        <div id="Data">
          <FeatureSection />
        </div>
        <div id="Guide">
          <Workflow />
        </div>
        <div id="Download">
          <Pricing />
        </div>
        <div id="WallOfLove">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
};


export default App;
