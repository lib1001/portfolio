import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="app">
      <Nav />
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
