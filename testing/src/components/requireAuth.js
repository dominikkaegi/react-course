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
        // this.props.history is provided by react-router
        // this.props.history.push() allows us to navigate programmativally
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
