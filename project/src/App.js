import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Default from './components/Default';
import Navigation from '../src/components/Navigation';
import ProductList from '../src/components/ProductList';
import Details from './components/Details';
import Cart from '../src/components/Cart/Cart';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
