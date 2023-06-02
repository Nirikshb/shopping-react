import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import Home from './Components/Home';
import store from './Store';

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
