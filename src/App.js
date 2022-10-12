import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experiences from './components/Experiences'

export default function App() {
  return (
    <main className='bg-mywhite'>
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main >
  );
}