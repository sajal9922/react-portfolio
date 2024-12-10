// @copyright 2024 shamsul alam
// @license Apache-2

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Work from './components/Work.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
      </main>
    </>
  );
};

export default App;
