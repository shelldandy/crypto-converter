import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import FancyRoute from './components/tools/FancyRoute/FancyRoute'

// Views
import FourOhFour from './views/404'
import Exchange from './views/Exchange'
import Summary from './views/Summary'


const App = () =>
  <Router>
    <Switch>
      <FancyRoute path='/' exact component={Summary} />
      <FancyRoute path='/exchange' component={Exchange} />
      <FancyRoute component={FourOhFour} />
    </Switch>
  </Router>

export default App;
