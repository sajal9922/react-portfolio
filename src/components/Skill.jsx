// @copyright 2024 shamsul alam
// @license Apache-2

import SkillCard from './SkillCard';
import {
  figma,
  css3,
  javascript,
  nodejs,
  mongodb,
  react,
  tailwindcss,
  expressjs,
  html,
  postgresql,
} from '../assets';

const Skill = () => {
  const skillItem = [
    {
      imgSrc: figma,
      label: 'Figma',
      desc: 'Design tool',
    },
    {
      imgSrc: html,
      label: 'HTML',
      desc: 'Markup Lamguage',
    },
    {
      imgSrc: css3,
      label: 'CSS',
      desc: 'User Interface',
    },
    {
      imgSrc: javascript,
      label: 'JavaScript',
      desc: 'Interaction',
    },
    {
      imgSrc: nodejs,
      label: 'NodeJS',
      desc: 'Web Server',
    },
    {
      imgSrc: expressjs,
      label: 'ExpressJS',
      desc: 'Node Framework',
    },
    {
      imgSrc: mongodb,
      label: 'MongoDB',
      desc: 'Database',
    },
    {
      imgSrc: postgresql,
      label: 'PostgreSQL',
      desc: 'Relational Database',
    },
    {
      imgSrc: react,
      label: 'React',
      desc: 'Framework',
    },
    {
      imgSrc: tailwindcss,
      label: 'TailwindCSS',
      desc: 'User Interface',
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;