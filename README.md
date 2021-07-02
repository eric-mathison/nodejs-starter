# NodeJS Starter Template

This is a starter template for creating a simple Express REST API Server that supports logging, cookie sessions, and cors.

## Install

To install the express server:

```bash
npm install
```

## Usage

When developing your API, it's common to have the server restart after any changes. This template does not include `Nodemon` and you will need to install `Nodemon` yourself by adding it to this package or globally.

```bash
sudo npm install -g nodemon --save-dev
```

To start the server with watch:

```bash
npm run dev
```

To start the server without watch (ie for prod):

```bash
npm start
```

Once the server has started, you will be able to access your API at `http://localhost:5000`.

## Tests

This template includes boilerplate for unit testing using Chai, ChaiHttp, and Mocha.  
To start testing:

```
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details
