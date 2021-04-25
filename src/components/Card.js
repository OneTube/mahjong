import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ onClick, number, isActive, freeze }) => {
  const [active, setActive] = useState(isActive);
  const [gap, setGap] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGap(false);
      setActive(false)
    }, 5000);
  }, []);

  useEffect(() => {
    if(!gap) {
      setActive(!isActive)
    }

  }, [isActive, gap]);

  return (
    <div
      onClick={onClick}
      className={classNames('main-card', { 'active': active}, { 'freeze': freeze})}
      role="button"
    >
      <span className="main-card__number">
        { number }
      </span>
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  freeze: PropTypes.bool.isRequired,
};

export default Card;
