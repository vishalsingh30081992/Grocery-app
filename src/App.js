import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductList from './components/ProductList/productList.component';
import CreateProduct from './components/CreateProduct/createProduct.component';
import Home from './components/Home/home.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid app-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light navigation-bar">
            <Link to={'/home'} className="navbar-brand">Grocery App</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create Products</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/products'} className="nav-link">Product List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/create' component={CreateProduct} />
            <Route path='/products' component={ProductList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;