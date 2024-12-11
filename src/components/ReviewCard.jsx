// @copyright 2024 shamsul alam
// @license Apache-2
import PropTypes from 'prop-types';
import { starFill } from '../assets';
const ratings = new Array(5);
ratings.fill({
  icon: starFill,
});

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] lg:min-w-[420px] flex flex-col">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon }, key) => (
          <span className=" " key={key}>
            <img className="h-4" src={icon} alt="star" />
          </span>
        ))}
      </div>
      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            className="img-cover"
            height={44}
            width={44}
            loading="lazy"
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-sm text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
export default ReviewCard;
