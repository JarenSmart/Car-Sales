export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const ADD_FEATURE = (item) => {
  return {
    type: ADD_FEATURE,
    payload: item,
  };
};

export const REMOVE_FEATURE = (item) => {
  return {
    type: REMOVE_FEATURE,
    payload: item,
  };
};
