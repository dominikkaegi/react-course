# React

## Controlled Input
A controlled input is if the input is controlled by the state. That means the user can't change the input. The inpurt is defined by the state of the component. If the user enters something, we call the ```onChange``` function, and then change the state in that function. The change of the function then changes the value of the input.

In this example the ```<textarea />``` is a controlled input.

```js
import React, {Component} from 'react';
export default class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (event) => {this.setState({comment: event.target.value})};

  render() {
    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}
```

## setState()
The ```setState()``` does not trigger an immediate update of the ```state```. It is asynchronous.
