import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
//import Login from './Login';
import Footer from './Footer';
import AboutUs from './About';
import Header from './Header';
import '../index.css';

// const Header = () => <h2>HEADER</h2>; const Dashboard = () =>
// <h2>DASHBOARD</h2>; const SurveyNew = () => <h2>SURVEY CREATE</h2>; const
// Landing = () => <h2>LANDING</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div id="container">
          {/* <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/survey" component={Dashboard} />
          <Route path="/survey/new" component={SurveyNew} /> */}
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/" component={Header} />
          <Route exact path="/" component={AboutUs} />
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
