import { ADD, REMOVE } from './chatTypes';

export const INITIAL_STATE = {
  messages: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        messages: [
          ...state.messages,
          action.data,
        ],
      };

    case REMOVE:
      return {
        messages: state.messages.filter(message => message !== action.data),
      };

    default:
      return state;
  }
};
