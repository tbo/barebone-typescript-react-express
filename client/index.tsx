import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import {listen, getCurrentRoute, getActivePath, IRoute} from './router';

interface IAppState {
  route: IRoute;
  activePath: string;
}

class App extends React.Component<{}, IAppState> {
  private constructor(props) {
    super(props);
    this.state = {
      route: getCurrentRoute(),
      activePath: getActivePath()
    };
    listen(this.handleRouteChange);
  }

  private handleRouteChange = (route, activePath) => {
    this.setState({route, activePath});
  }

  public render() {
    const {route} = this.state;
    return (
      <div style={{paddingLeft: 20, paddingRight: 20}}>
        <Header/>
        <Navigation activePath={this.state.activePath}/>
        <main style={{paddingTop: 20, paddingBottom: 20}}>
          {!!route.component && <route.component route={route}/>}
        </main>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('mount'));
});
