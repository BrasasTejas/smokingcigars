## Pairs well with coffee and self-loathing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Helpful Resources

- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Higher Order Components HOC](https://reactjs.org/docs/higher-order-components.html)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### Good to knows for React Structure

- Clearly focused components
- Create granular components
- Create as many functional components as possible
- Clear responsibilities of components, have them narrowly focused
- Narrowly focused, only about presenting something, displaying JSX, and the logic to display (ex. adding css classes)
- Don't manage State (to minimize State manipulations to maintain growth)
- Have containers be as lean as possible as far as JSX and styling

### Stateless vs Stateful Components

**\*Stateful (Containers)**

1. created with the class keyword and extend component (Class ABC extends component)
2. Can access State
3. Can implement Lifecycle Hooks
4. Uses "this" keyword to access State and Props
   - ( this.state.ABC & this.props.ABC)
5. **_Only use if there's a need to manage State or access Lifecycle Hooks_**

**\*Stateless**

1. functions which receive props ( const ABC = (props) => {...} )
2. No access to State or implement Lifecycle Hooks
3. Access Props via "props" ( props.ABC )
4. _*Use for all other Cases*_

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
