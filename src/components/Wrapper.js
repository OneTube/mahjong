import { useState, useEffect } from 'react';
import { updatedItemAction, updatedItemFreeze, updatedAllItemFreeze } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';


const Wrapper = () => {
  const [activeNumber, setActiveNumber] = useState([]);

  const dispatch = useDispatch();

  const numbers = useSelector((state) => state.sortedArr);

  useEffect(() => {
    if (activeNumber.length === 2) {
      dispatch(updatedAllItemFreeze(true));
      if(activeNumber[0].number !== activeNumber[1].number) {
        setTimeout(() => {
          dispatch(updatedItemAction(activeNumber[0].id));
          dispatch(updatedItemAction(activeNumber[1].id));
          setActiveNumber([]);
          setTimeout(() => (
            dispatch(updatedAllItemFreeze(false))
          ), 500)
        }, 1000);
      }
      if(activeNumber[0].number === activeNumber[1].number) {
        dispatch(updatedItemFreeze(activeNumber[0].number));
        setActiveNumber([]);
        setTimeout(() => (
          dispatch(updatedAllItemFreeze(false))
        ), 1000)
      }
    }
  }, [activeNumber]);

  return (
    <div className="main-wrap">
      {numbers.map((item) =>
        <Card
          key={item.id}
          isActive={item.isActive}
          freeze={item.freeze}
          number={item.number}
          onClick={() => {
            setActiveNumber([...activeNumber, {id: item.id, number: item.number}]);
            dispatch(updatedItemAction(item.id));
          }}
        />
      )}
    </div>
  );
};

export default Wrapper;
