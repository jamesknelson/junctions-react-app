import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { createJunction } from 'junctions';
import { Link, Router } from 'react-junctions';
import InvoicesScreen from './InvoicesScreen';

const history = createBrowserHistory();

const junction = createJunction({
  Dashboard: {
    default: true,
  },
  Invoices: {
    next: InvoicesScreen.junction,
  },
});

class AppContent extends Component {
  renderRoute(route, locate) {
    switch (route && route.key) {
      case 'Invoices':
        return <InvoicesScreen route={route.next} locate={route.locate} />

      case undefined:
        return <h1>404</h1>

      default:
        return <h1>{route.key}</h1>
    }
  }

  render() {
    return (
      <div>
        <div style={{fontSize:'50px'}}>{this.props.title}</div>
        <nav>
          <Link to={{pathname: "/dashboard"}}>Dashboard</Link>
          <Link to={{pathname: "/invoices"}}>Invoices</Link>
        </nav>
        {this.renderRoute(this.props.route, this.props.locate)}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router
        history={history}
        junction={junction}
        render={<AppContent title='Junctions Demo' />}
      />
    )
  }
}

export default App;
