import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import '../index.css';

class Footer extends Component {
  render() {
    // switch (this.props.auth) {
    //   case null:
    //     return;
    //   case false:
    //     return <Redirect to="/" />;
    //   default:
    return (
      <div id="footer sticky-bottom">
        <footer>
          <div
            className="pb-2 pt-2"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '8px',
              color: 'rgb(146,146,146)',
              textAlign: 'center'
            }}
          >
            ©2018 | Kreative Sparks Photography - All rights reserved to content
            <br />
            ©2018 | Ian Sabey and David Neilson - Web design
          </div>
        </footer>
      </div>
    );
    // }
  }

  // render() {
  //   return <div>{this.renderContent()}</div>;
  // }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

//connect(mapStateToProps)()

export default Footer;
