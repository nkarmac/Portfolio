import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Technologies/>
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;