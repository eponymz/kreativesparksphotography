import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'; import Center from 'react-center';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="bg-secondary border-dark card card-block card-body m-3">
          <h1
            style={{
              textAlign: 'center',
              color: 'lightgray',
              fontFamily: "'Monda', sans-serif"
            }}
            className="card card-title border border-secondary bg-dark"
          >
            Contact Us
          </h1>
          <p
            style={{
              textAlign: 'center',
              color: 'lightgray',
              fontFamily: "'Monda', sans-serif"
            }}
          >
            Feel free to shoot us an email here or reach out through our social
            media sites for consultation!
          </p>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 m-auto w-50">
              <form className="form-horizontal">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="jane.doe@example.com"
                  />
                </div>
                <div className="form-group ">
                  <label>Your Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    defaultValue={''}
                  />
                </div>
                <button
                  type="submit"
                  id="sendEmail"
                  className="btn btn-outline-dark w-100 text-center border-light font-weight-bold"
                >
                  Send Message
                </button>
              </form>
              <hr />
              <h3
                style={{
                  textAlign: 'center',
                  color: 'lightgray',
                  fontFamily: "'Monda', sans-serif"
                }}
              >
                Our Social Sites
              </h3>
              <ul className="list-inline banner-social-buttons">
                <li>
                  <a href="#" className="btn btn-default btn-lg">
                    <i className="fa fa-twitter">
                      {' '}
                      <span className="network-name">Twitter</span>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-default btn-lg">
                    <i className="fa fa-facebook">
                      {' '}
                      <span className="network-name">Facebook</span>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-default btn-lg">
                    <i className="fa fa-youtube-play">
                      {' '}
                      <span className="network-name">Youtube</span>
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // render() {
  //   return <div>{this.renderContent()}</div>;
  // }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// connect(mapStateToProps)

export default Contact;
