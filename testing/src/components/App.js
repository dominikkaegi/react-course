import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from 'actions';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  renderButton() {
    return (
      this.props.auth
        ? (
         <button
            onClick={() => this.props.changeAuth(false)}>
            Sign Out
          </button>
        )
        : <button
            onClick={() => this.props.changeAuth(true)}>
            Sign In
          </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Add Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route exact path="/posts" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(App);
