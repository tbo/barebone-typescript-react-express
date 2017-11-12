import * as express from 'express';
const app = express();

if (process.env.NODE_ENV === 'development')  {
  /* tslint:disable */
  const webpackCompiler = require('webpack')(require('../webpack.config'));
  app.use(require('webpack-dev-middleware')(webpackCompiler, {stats: 'errors-only', publicPath: '/'}));
  /* tslint:enable*/
}

app.use('/', express.static('public'));
app.use('*', express.static('public/index.html'));
app.listen(3000);
