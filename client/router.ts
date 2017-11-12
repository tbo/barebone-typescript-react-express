import createHistory from 'history/createBrowserHistory'
import Homepage from './pages/home';
import NotFound from './pages/not-found';
import * as UrlPattern from 'url-pattern';

interface IRouteDefinition {
  path: string;
  component: any;
  pattern: UrlPattern;
}

export interface IRoute extends IRouteDefinition {
  params: object;
}

const addPattern = item => ({...item, pattern: new UrlPattern(item.path)});

const routes: IRouteDefinition[] = [
  {path: '/', component: Homepage},
  {path: '/:name', component: Homepage},
  {path: '*', component: NotFound}
].map(addPattern);

const listeners = [];

export const listen = (listener: Function) => listeners.push(listener);

const getRoute = (location): IRoute => {
  let params = {};
  return {...routes.find(({pattern}) => params = pattern.match(location.pathname)), params};
};

const history = createHistory();

export const getCurrentRoute = () => getRoute(history.location);

history.listen((location) => {
  const route = getRoute(location);
  listeners.forEach(listener => listener(route));
})

export const navigateTo = (to: string) => history.push(to);
