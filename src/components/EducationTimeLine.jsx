// @copyright 2024 shamsul alam
// @license Apache-2
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import {
  logo,
  utu_logo,
  codecademy,
  codewithmosh,
  centria_logo,
  national_uni_bd_logo,
} from '../assets';

const educationData = [
  {
    date: '2023 - Present',
    degree: 'Full-stack Engineer',
    institution: 'CodeCademy (MOOC)',
    details: [
      'UI/UX design',
      'Frontend',
      'Backend',
      'Optimization',
      'Database',
      'Data Science',
      'PostgreSQL',
    ],
    icon: codecademy,
  },
  {
    date: 'Jan. 2024 - Jul. 2024',
    degree: 'Sustainable Web Development',
    institution: 'University of Turku',
    details: [
      'software development',
      'Green Coding',
      'UI/UX design',
      'Frontend',
      'Backend',
      'Optimization',
      'Testing',
      'Database',
      'Capstone Project',
    ],
    icon: utu_logo,
  },

  {
    date: 'Jan. 2023 - Dec.2023',
    degree: 'Software Development',
    institution: 'Code With Mosh (MOOC)',
    details: [
      'HTML',
      'CSS',
      'NodeJS',
      'ExpressJS',
      'My Sql',
      'mongoDB',
      'Data Architecture',
    ],
    icon: codewithmosh,
  },
  {
    date: '2004 - 2009',
    degree: 'Bachelor Degree in Chemical Engineering ',
    institution: 'Centria Ammattikorkeakoulu Kokkola',
    details: [
      'Environmental Engineering',
      'Sustainability',
      'Chemical Process',
      'Thermodynamics',
      'Biochemistry',
      'Higher Mathematics',
      'material Science',
      'Capstone Projects',
    ],
    icon: centria_logo,
  },
  {
    date: '2001',
    degree: 'computer science & Engineering',
    institution: 'National University of Bangladesh',
    details: [
      'Computer Science',
      'Software Engineering',
      'Data Structure',
      'Algorithm',
      'Statistics',
      'Higher Mathematics',

      'Capstone Projects',
    ],
    icon: national_uni_bd_logo,
  },
];

const EducationTimeLine = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="headline-2 reveal-up">Education Time Line</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Here's a glimpse into my academic milestones, where I developed a
          passion for coding, problem-solving.
        </p>
        <h2 className="text-2xl font-bold text-zinc-400 mb-4 text-center reveal-up">
          Education
        </h2>
        <VerticalTimeline className="reveal-up" lineColor="gray">
          {educationData.map((item, key) => {
            const { ref, inView } = useInView({
              // triggerOnce: false, // Trigger the animation multiple times
              threshold: 0.3, // Trigger when 10% of the element is in view
            });
            return (
              <VerticalTimelineElement
                key={key}
                date={item.date}
                iconStyle={{
                  background: '#18181b',
                }}
                contentStyle={{
                  background: '#18181b',
                  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                  border: '0.5px solid #fff',
                }}
                contentArrowStyle={{ borderRight: '15px solid #fff' }}
                icon={
                  <figure className="flex justify-center items-center h-full w-full">
                    <img
                      src={item.icon}
                      className="h-3/4 w-3/4 object-contain rounded-full"
                    />
                  </figure>
                }
              >
                <div
                  ref={ref}
                  className={`transition-opacity duration-500 ${
                    inView ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <h4 className="text-sm font-medium text-zinc-400">
                    {item.institution}
                  </h4>
                  <p className="text-sm ">Focused on</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {item.details.map((item, key) => (
                      <span
                        key={key}
                        className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default EducationTimeLine;
