import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Services from "./components/Services.jsx";

export default function App() {
  return (
    <>
      
      <main>
        <section id="main-banner" aria-label="Home">
          <Header />
          <Hero />
        </section>
        
        <Offers />
        <Services />
      </main>
      <a className="back-to-top" href="#home" aria-label="Back to top">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
}
