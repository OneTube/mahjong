import { readyArray } from '../utils/arrayRandomizer';
import { ACTIONS_TYPES } from './actions_types';

const initialState = {
  sortedArr: readyArray,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATED_ITEM_ACTION:
      return {
        ...state,
        sortedArr: state.sortedArr.map(item =>
        {
          if (item.id === action.payload){
            return {...item, isActive: !item.isActive};
          }
          return item;
        })
      };
    case ACTIONS_TYPES.UPDATED_ITEM_FREEZE:
      return {
        ...state,
        sortedArr: state.sortedArr.map(item =>
        {
          if (item.number === action.payload){
            return {...item, freeze: true};
          }
          return item;
        })
      };
    case ACTIONS_TYPES.UPDATED_ALL_ITEM_FREEZE:
      return {
        ...state,
        sortedArr: state.sortedArr.map(item =>
        {
          return {...item, freeze: action.payload};
        })
      };

    default:
      return state;
  }
}
