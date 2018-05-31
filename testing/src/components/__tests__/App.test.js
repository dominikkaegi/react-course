import React from 'react';
import ReacDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.create('div');

  ReactDOM.render(<App />, div);

  ReacDOM.unmountComponentAtNode(div);
})
