import { SET_SIDE_BAR } from './Constants';

export const setSideBar = (payload) => {
  return {
    type: SET_SIDE_BAR,
    payload,
  };
};
