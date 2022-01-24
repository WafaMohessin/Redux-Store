//import logo from './logo.svg';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';




import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
             

              </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
