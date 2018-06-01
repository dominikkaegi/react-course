# Setting Up Enviroment

## Absolute Paths
To set up the use of absolute paths create a ```.env``` file in the root directory (same level as the ```src``` directory). The benefit of having absolute paths is that you can move around files, without breaking the import statements.

Then add to file following line:

```
NODE_PATH=src/
```
Now we can import components like this:

```
/src
	/components
		App.js
		CommentBox.js
		CommentList.js
```

```js
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});
```

## Editor Config
To set up the configurations over multiple editors and pc for a project use a ```.editorconfig``` file. An example of the configurations could be following:

```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```
