import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'views/Home';
import Cv from 'views/Cv';
import Work from 'views/Work';

const App = () => (
  <Layout>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/cv" component={Cv}/>
        <Route path="/work" component={Work}/>
      </div>
    </Router>
  </Layout>
);

export default App;
