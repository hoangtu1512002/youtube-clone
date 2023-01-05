import { SET_SIDE_BAR } from './Constants';

const initState = {
  sidebar: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SIDE_BAR:
      return {
        sidebar: !action.payload.sidebar,
      };

    default:
      throw new Error('invalid action');
  }
};

export { initState };
export default reducer;
