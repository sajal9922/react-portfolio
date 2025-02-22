// @copyright 2024 shamsul alam
// @license Apache-2

import ProjectCard from './ProjectCard';
import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
} from '../assets';
const Work = () => {
  const works = [
    {
      imgSrc: project_1,
      title: 'Game search app',
      tags: ['API', 'SPA', 'Development'],
      projectLink: 'https://game-hub-eight-olive.vercel.app/',
    },
    {
      imgSrc: project_2,
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/',
    },
    {
      imgSrc: project_3,
      title: 'Portfolio website',
      tags: ['Development', 'Web-design'],
      projectLink: 'https://github.com/sajal9922/react-portfolio',
    },
  ];
  const upcomingWorks = [
    {
      imgSrc: project_4,
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: '',
    },
    {
      imgSrc: project_5,
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: '',
    },
    {
      imgSrc: project_6,
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: '',
    },
  ];
  return (
    <>
      <section className="section" id="work">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
          <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My upcoming projects</h2>
          <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {upcomingWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
