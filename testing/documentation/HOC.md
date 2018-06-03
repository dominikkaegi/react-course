# Higher Order Components

Higher Order Components are used for adding functionality to a component. This is useful, because we can extract certain functionality which is used in a lot of components, and add it to all of them by just calling the HOC function on them. 

A good example for the use of a HOC is the authentication. Instead of adding the logic for authentication on each route we can just create on HOC with the logic of authentication and add it to all the components which need authentication.


```js
import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
  class ComposedCompnent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {auth: state.auth};
  }

  return connect(mapStateToProps)(ComposedCompnent);
}
```

Above we can see a HOC. It takes a component as an argument. Then it defines the class of another component with the added functionality (here a check if the user is authenticated). Then we define our mapStateToProps to connect, because we want to connect the component to redux. In the end we return the connected ComposedComponoent.

To use the HOC on a component like CommentBox it would look sth like this:

```js
export default requireAuth(CommentBox)
```
If the CommentBox is connected to redux, then it the order is:

```js
export default connect(null, actions)(requireAuth(CommentBox));
```

The reason for that is thate we enhance our ```CommentBox``` with additional funtionality with ```requireAuth()```. The ```requireAuth``` just returns a Component which has all the functionality of the ```CommentBox``` composed with authentication. Then we call ```connect(null, actions)(requireAuth(CommentBox)``` on it, which in itself also ```CommentBox``` with the functionality of the state. To make this composability possible with HOCs it is important, that we pass on the props in the HOC.

```js
export default (ChildComponent) => {
  class ComposedCompnent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
    	// Passing on the props is important, so that we pass on
    	// any functionality we receive from composing with 
    	// other HOCs
      return <ChildComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {auth: state.auth};
  }

  return connect(mapStateToProps)(ComposedCompnent);
}
```