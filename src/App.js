import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    </Provider>
  );
};

export default App;
