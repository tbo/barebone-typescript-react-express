import * as express from 'express';
import * as webpackMiddleware from 'webpack-dev-middleware';
import * as webpack from 'webpack';

const app = express();

if (process.env.NODE_ENV === 'development')  {
  const webpackMiddlewareConfig = {
    stats: 'errors-only',
    publicPath: '/'
  }
  const webpackCompiler = webpack(require('../webpack.config'));
  app.use(webpackMiddleware(webpackCompiler, webpackMiddlewareConfig));
}

app.use('/', express.static('public'));
app.listen(3000);
