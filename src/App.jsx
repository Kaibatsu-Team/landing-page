import React, { useRef } from "react";
import Header from "./1-Header/Header";
import Hero from "./2-Hero/Hero";
import Banner from "./3-Profiles/Banner";
import Skills from "./4-Skills/Skills";
import Projects from "./5-Projects/Projects";
import Footer from "./6-Footer/Footer";

function App() {
  const teamRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const scrollEffect = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header scrollEffect={scrollEffect} teamRef={teamRef} skillRef={skillRef} projectRef={projectRef} />
      <Hero />
      <Banner ref={teamRef} />
      <Skills ref={skillRef} />
      <Projects ref={projectRef} />
      <Footer />
    </>
  );
}

export default App;
