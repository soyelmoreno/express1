# Testing server with Node and Express

## [How to Setup Node Express Server to mock APIs response locally](https://medium.com/analytics-vidhya/how-to-setup-node-express-server-to-mock-apis-response-locally-53b4fdb8de97)

- **data.json** — This is where you should put the response you want to mock.
- **dataController.js** — We will set up a very simple logic in this file to read
  from the data file you created in the previous step
- **server.js** — This is the gist of everything. This is the file we will
  execute to mock the server. It listens to the port and the API string you have
  in your “app.get”. If you hit “localhost:3002/api/data”, your dataController
  will call getData which would fetch the data from the data.json file in JSON
  format.

Finally, to start your server, run

```
npm server.js
```

Your API is running on port 3002. Your web app is on port 3000. So in your
package.json, add a proxy so your web app knows that the API is mocked at a
different port:

```
// package.json
"proxy": "http://localhost:3002"
```

## [How To Build and Test a Node.js REST API with Express on Ubuntu 18.04](https://www.section.io/engineering-education/building-a-basic-api-with-nodejs/)

Step 1. Build and Run and Express server with Node

First, setup Express. Write a simple "Hello World" app.

```
app.get('/', (req, res) => {
  res.end('Hello World!');
});
```

Step 2. Create a GET endpoint

Say you have this data:

```
/data/products.json
```

First, read the file contents with the `fs module`, then return the data to the
client that made the GET request to your server.

Then navigate to `http://localhost:3002/api/products` to see the data in
`products.json`

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
