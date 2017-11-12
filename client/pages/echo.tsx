import * as React from 'react';
import {IRoute} from '../router';

const Echo = (props: {route: IRoute}) => (
  <div>Hello, {props.route.params.name}!</div>
);

export default Echo;
