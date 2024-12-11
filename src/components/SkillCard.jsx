// @copyright 2024 shamsul alam
// @license Apache-2

import PropTypes from 'prop-types';
const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ${classes}`}
    >
      <figure className=" bg-zinc-700/50 rounded-lg overflow-hidden h-12 w-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} alt={label} height={32} width={32} />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className=" text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;