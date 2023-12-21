import Header from "./Component/Header/Header"
import Home from "./Component/Hero/Home"
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";
import "./App.css"
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer";


const App = () => {
  // When scroll header at top

  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
