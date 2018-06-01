import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map((comment) => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    action: FETCH_COMMENTS,
    payload: response,
  }
}
