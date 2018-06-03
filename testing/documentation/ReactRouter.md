# React Router

* Install React Router:
```npm install react-router-dom```

* Enclose your app into the ```<BrowserRouter />```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path ="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
```


* Use routing within your App, make sure to use the ```exact``` prop, if you don't want to limit the display of the routing. (e.g. so that if you go to ```/foo```, only ```/foo``` get's displayed and not as well ```/```, ```/f```, ```/fo``` and ```/foo```

```js
import React from 'react';
import {Route} from 'react-router-dom';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
  return (
    <div>
      <Route exact path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  )
}
```