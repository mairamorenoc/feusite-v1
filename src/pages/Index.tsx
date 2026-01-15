import Navbar from "../components/Header";
import Intro from "../components/Intro";
import Games from "../components/Games";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Intro />
      <Games />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
