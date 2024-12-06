import PropTypes from 'prop-types';

// Primary Button

const Button = ({ href, target = '_self', icon, classes, label }) => {
  if (href) {
    return (
      <a href={href} target={target} className={` btn ${classes}`}>
        {label}
        {icon ? icon : undefined}
      </a>
    );
  } else {
    return (
      <button className={` btn  ${classes}`}>
        {label}
        {icon ? icon : undefined}
      </button>
    );
  }
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export default Button;
