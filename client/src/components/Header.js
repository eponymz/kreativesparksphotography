import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import logout from '../logout.svg';
import '../index.css';
import kslogo from '../ks-logo.png';

class Header extends Component {
  render() {
    // switch (this.props.auth) {
    //   case null:
    //     return;
    //   case false:
    //     return (
    //       <div>
    //         <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    //           <div>
    //             <Link to="/home" className="no-underline navbar-title">
    //               Kreative Sparks Photography
    //             </Link>
    //             <Link to="/gallery" className="no-underline navbar-button">
    //               Gallery
    //             </Link>
    //             {/* <Link to="/about" className="no-underline navbar-button">
    //               About Us
    //             </Link> */}
    //             <Link to="/contact" className="no-underline navbar-button">
    //               Contact Us!
    //             </Link>
    //             <a className="right component-title" href="/auth/google">
    //               L O G - I N
    //             </a>
    //           </div>
    //         </nav>
    //       </div>
    //     );
    //   default:
    return (
      <nav className="navbar pb-1 pt-0 pr-0 pl-2 sticky-top navbar-dark bg-dark border-bottom border-light">
        <div>
          <Link
            to="/"
            className="navbar-brand"
            style={{
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            <img style={{ paddingRight: '5px' }} alt="logo" src={kslogo} />
            Kreative Sparks Photography
          </Link>
          <Link
            to="/gallery"
            className="btn font-weight-bold btn-outline-light border-dark"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Gallery
          </Link>
          {/* <Link to="/about" className="no-underline navbar-button">
                  About Us
                </Link> */}
          <Link
            to="/contact"
            className="btn font-weight-bold btn-outline-light border-dark"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Contact Us!
          </Link>
        </div>
      </nav>
    );
    //}
  }

  // render() {
  //   return <div>{this.renderContent()}</div>;
  // }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// connect(mapStateToProps)()

export default Header;
