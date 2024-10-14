import AboutSection from "./components/AboutSection";
import Contact from "./components/contact/Contact";
import Cta from "./components/Cta";
import Faq from "./components/faqs/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Properties from "./components/properties/Properties";
import TeamMembers from "./components/teams/TeamMembers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <AboutSection />
      <Cta />
      <Faq />
      <Contact />
      <TeamMembers />
      <Footer />
    </>
  );
}

export default App;
