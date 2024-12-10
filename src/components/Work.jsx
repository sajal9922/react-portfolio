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
      title: 'Full stack music app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/',
    },
    {
      imgSrc: project_2,
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/',
    },
    {
      imgSrc: project_3,
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: '',
    },
    {
      imgSrc: project_4,
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome',
    },
    {
      imgSrc: project_5,
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
    },
    {
      imgSrc: project_6,
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    },
  ];
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
