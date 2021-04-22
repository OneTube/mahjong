import { useState, useEffect } from 'react';
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

export default Card;
