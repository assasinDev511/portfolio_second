import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import data from './data/portfolio.json'; // [code_file:11]

function App() {
  const [portfolio] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <Home data={portfolio} />
      <About data={portfolio} />
      <Skills data={portfolio} />
      <Projects data={portfolio} />
      <Contact data={portfolio} />
    </div>
  );
}

export default App;