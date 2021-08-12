import { ADD, REMOVE } from './chatTypes';

export const addMessage = data => ({
  type: ADD,
  data,
});

export const removeMessage = data => ({
  type: REMOVE,
  data,
});
