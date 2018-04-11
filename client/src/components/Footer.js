import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import '../css/Footer.css';
import '../index.css';

class Footer extends Component {
  renderContent() {
    // switch (this.props.auth) {
    //   case null:
    //     return;
    //   case false:
    //     return <Redirect to="/" />;
    //   default:
    return (
      <div id="footer">
        <footer>
          <div className="footer-component">©2018 | Ian Sabey</div>
        </footer>
      </div>
    );
    // }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

//connect(mapStateToProps)()

export default Footer;
