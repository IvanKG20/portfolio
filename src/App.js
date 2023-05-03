import React from "react"
import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';

function App() {
  return (
    <>
      <Sidebar/>
      <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume />
      <Portfolio />
      <Contact />
      </main>
    </>
  );
}

export default App;
