import createHistory from 'history/createBrowserHistory'
import Homepage from './pages/home';
import Echo from './pages/echo';
import Ajax from './pages/ajax';
import NotFound from './pages/not-found';
import {parse} from 'qs';
import * as UrlPattern from 'url-pattern';

interface IRouteDefinition {
  path: string;
  component: any;
  pattern: UrlPattern;
}

export interface IRoute extends IRouteDefinition {
  params: {[key: string]: string};
  query: {[key: string]: string};
}

const addPattern = item => ({...item, pattern: new UrlPattern(item.path)});

const routes: IRouteDefinition[] = [
  {path: '/', component: Homepage},
  {path: '/echo/:name', component: Echo},
  {path: '/ajax', component: Ajax},
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
  listeners.forEach(listener => listener(route));
})

export const getCurrentRoute = () => getRoute(history.location);

export const listen = (listener: Function) => listeners.push(listener);

export const navigateTo = (to: string) => history.push(to);
