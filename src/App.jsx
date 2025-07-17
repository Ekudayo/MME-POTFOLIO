import Navbar from "./component/navbar/Navbar";
import Intro from "./component/intro/Intro";
import AboutMe from "./component/aboutme/AboutMe";
import Skills from "./component/myskills/Skills";
import ProjectSwiper from "./component/project/ProjectSwiper";
import  Blog  from "./component/blog/Blog";
import Contact from "./component/contact/Contact"
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <ProjectSwiper />
      <Blog />
      <Contact/>
    </>
  );
}

export default App;
