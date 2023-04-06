import { useEffect } from "react";
import AOS from "aos";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Profile/Home.js";
import About from "./Components/Profile/About.js";
import Education from "./Components/Profile/Education/Education.js";
import Project from "./Components/Profile/Projects/Project";
import Experience from "./Components/Profile/Experience";
import Skills from "./Components/Profile/Skills/Skills";
import Social from "./Components/Social";
import { Container, Row } from "react-bootstrap";


const App = () => {

  useEffect(()=>{
    AOS.init({
      offset: 300,
      duration: 400,
      once: false,
      easing: 'linear',
    });
    AOS.refresh();
  },[])

  return (
    <>
    <Layout>
      <Container>
          <Home />
          <About/>
          <Education/>
          {/* <Experience/> */}
          {/* <Project/> */}
          <Skills/>
      </Container>
    </Layout>
    <Social/>
    </>
  );
};

export default App;
