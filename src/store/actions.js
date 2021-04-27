import { ACTIONS_TYPES } from './actions_types';

export const updatedItemAction = (id) => {
  return {
    type: ACTIONS_TYPES.UPDATED_ITEM_ACTION,
    payload: id,
  }
};

export const updatedItemFreeze = (currentNumber) => {
  return {
    type: ACTIONS_TYPES.UPDATED_ITEM_FREEZE,
    payload: currentNumber,
  }
};

export const updatedAllItemFreeze = (isFreeze) => {
  return {
    type: ACTIONS_TYPES.UPDATED_ALL_ITEM_FREEZE,
    payload: isFreeze,
  }
};
