import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import logout from '../logout.svg';
import '../css/Header.css';
import '../css/GoogleBtn.css';
import '../index.css';

class Header extends Component {
  renderContent() {
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
      <div id="header">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div>
            <Link to="/" className="no-underline navbar-title">
              Kreative Sparks Photography
            </Link>
            <Link to="/gallery" className="no-underline navbar-button">
              Gallery
            </Link>
            {/* <Link to="/about" className="no-underline navbar-button">
                  About Us
                </Link> */}
            <Link to="/contact" className="no-underline navbar-button">
              Contact Us!
            </Link>
          </div>
        </nav>
      </div>
    );
    //}
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// connect(mapStateToProps)()

export default Header;
