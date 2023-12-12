import "./app.scss"
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Particle from "./components/Particle.jsx";
import Skills from "./components/Skills/Skills.jsx";
import {OpenProvider} from "./context/OpenContext.jsx";
function App() {

  return (
      <div>

         <OpenProvider>
             <section id="Homepage">
                 <Particle></Particle>
                 <Hero/>
                 <Navbar/>
             </section>
             <section id="Skills">
                 <Skills/>
             </section>
             {/*<Portfolio/>*/}
             {/*<section id="Contact">*/}
             {/*    <Contact/>*/}
             {/*</section>*/}
         </OpenProvider>


      </div>

  )
}

export default App
