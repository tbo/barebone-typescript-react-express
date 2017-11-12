import createHistory from 'history/createBrowserHistory'
import Homepage from './pages/home';
import NotFound from './pages/not-found';
import {parse} from 'qs';
import * as UrlPattern from 'url-pattern';

interface IRouteDefinition {
  path: string;
  component: any;
  pattern: UrlPattern;
}

export interface IRoute extends IRouteDefinition {
  params: object;
  query: object;
}

const addPattern = item => ({...item, pattern: new UrlPattern(item.path)});

const routes: IRouteDefinition[] = [
  {path: '/', component: Homepage},
  {path: '/:name', component: Homepage},
  {path: '*', component: NotFound}
].map(addPattern);

const listeners = [];

const history = createHistory();

const getRoute = (location): IRoute => {
  let params = {};
  const query = parse(location.search.substring(1));
  return {...routes.find(({pattern}) => params = pattern.match(location.pathname)), params, query};
};

history.listen((location) => {
  const route = getRoute(location);
  console.warn(route);
  listeners.forEach(listener => listener(route));
})

export const getCurrentRoute = () => getRoute(history.location);

export const listen = (listener: Function) => listeners.push(listener);

export const navigateTo = (to: string) => history.push(to);
