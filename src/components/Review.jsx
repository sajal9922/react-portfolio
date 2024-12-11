// @copyright 2024 shamsul alam
// @license Apache-2
import ReviewCard from './ReviewCard';
import {
  people_1,
  people_2,
  people_3,
  people_4,
  people_5,
  people_6,
} from '../assets';
const Review = () => {
  const reviews = [
    {
      content:
        'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: people_1,
      company: 'PixelForge',
    },
    {
      content:
        'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: people_2,
      company: 'NexaWave',
    },
    {
      content:
        'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: people_3,
      company: 'CodeCraft',
    },
    {
      content:
        'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: people_4,
      company: 'BrightWeb',
    },
    {
      content:
        'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: people_5,
      company: 'TechMosaic',
    },
    {
      content:
        'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: people_6,
      company: 'Skyline Digital',
    },
  ];
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What our customers say</h2>
        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
