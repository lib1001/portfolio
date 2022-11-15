import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="app">
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="sections">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
