import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import {listen, getCurrentRoute, IRoute} from './router';

class App extends React.Component<{}, {route?: IRoute}> {
  private constructor(props) {
    super(props);
    this.state = {
      route: getCurrentRoute()
    };
    listen(this.handleRouteChange);
  }

  private handleRouteChange = (route) => {
    this.setState({route});
  }

  render() {
    const {route} = this.state;
    return (
      <div style={{paddingLeft: 20, paddingRight: 20}}>
        <Header/>
        <Navigation/>
        {!!route.component && <route.component/>}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('mount'));
});
