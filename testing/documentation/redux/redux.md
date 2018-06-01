# Redux
	
## Setting up Redux
1. Import ```Provider, createStore, reducers```
2. Wrap your App in the Provider
3. Set up the store prop with an initial state

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';

import App from 'components/App';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
```

Then we create the reduers and the action creators

```
/actions
	index.js
	types.js
/reducers
	/comments.js
	/index.j
```

```js
// actions/index.js
import {SAVE_COMMENT} from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
```
```js
// actions/types.js
export const SAVE_COMMENT = 'save_comment';
```
```js
// reducers/comments.js
import {SAVE_COMMENT} from 'actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
```
```js
import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';

export default combineReducers({
  comments: commentsReducer,
});
```

Now we are ready to connect components to the redux store like this:

```js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (event) => {this.setState({comment: event.target.value})};

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);

```