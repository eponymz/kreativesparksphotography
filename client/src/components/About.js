import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
// import Center from 'react-center';
import '../css/Header.css';
import '../css/Prerelease.css';
import '../index.css';

class AboutUs extends Component {
  renderContent() {
    return (
      <div className="content-title body" id="body">
        <h1
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            paddingTop: '35px'
          }}
        >
          About Us
        </h1>
        <br />
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
            odio mattis, semper tellus et, mollis libero. Cras molestie nibh
            arcu. Proin sollicitudin tortor sapien, ut condimentum quam
            malesuada in. Nulla dictum cursus mi, at fermentum mauris faucibus
            et. Cras ligula eros, porta non pharetra a, consequat vitae elit.
            Aenean eros mi, facilisis sit amet lacinia ut, finibus eu arcu.
            Aenean ut rhoncus justo, quis tristique nibh. Vestibulum dignissim
            accumsan ligula.
          </p>
          <p>
            Aliquam a velit ex. Aliquam quis blandit eros, eget accumsan ipsum.
            Sed mollis leo ut tempus sodales. Duis ut egestas tortor, non
            posuere augue. In laoreet velit id gravida bibendum. Morbi eu ligula
            purus. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Duis vehicula tempor tortor, et
            lobortis nibh venenatis vel. Cras vitae magna eros. Cras mollis id
            enim quis venenatis. Pellentesque pulvinar nunc sit amet sem
            convallis, eu porttitor nibh convallis. Suspendisse dapibus ut
            lectus vulputate pretium. Aliquam fringilla vulputate metus, in
            dapibus neque imperdiet eu. Nullam ut elit eget dolor vulputate
            egestas.
          </p>
          <p>
            Mauris eleifend ornare porttitor. Donec tincidunt odio suscipit
            justo pellentesque, et blandit mi porttitor. Pellentesque eget
            lacinia odio. Curabitur placerat, mi molestie porttitor interdum,
            velit est hendrerit mauris, quis semper ex lorem convallis erat.
            Etiam quis sodales ipsum. Sed libero tellus, ornare vel arcu
            ultrices, dictum vehicula lacus. Proin sit amet faucibus eros.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Cras sollicitudin, ligula eu viverra
            pulvinar, ligula lorem convallis neque, vel lacinia urna purus
            consequat mi. Sed dapibus quam a justo venenatis, id finibus sapien
            dictum. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nullam viverra massa quis auctor
            porttitor. Nam nec est vitae nunc ultrices hendrerit. Aliquam
            finibus tempus dignissim.
          </p>
          <p>
            Maecenas lacus sapien, elementum id facilisis non, finibus a nisl.
            Fusce efficitur euismod tincidunt. Sed vel nibh vel diam dictum
            scelerisque et a elit. Curabitur porta quam vel cursus convallis.
            Suspendisse tincidunt enim eros, sit amet scelerisque nisi placerat
            a. Morbi sit amet tellus cursus, fermentum ex et, rutrum diam. Nulla
            nisl nibh, volutpat et velit sit amet, blandit rhoncus augue.
            Vivamus dapibus, erat quis feugiat varius, elit elit dictum nibh, id
            lobortis dolor risus et magna. Mauris dignissim vulputate tincidunt.
            Maecenas a erat vitae massa dapibus cursus nec at felis. Maecenas
            quis ornare felis. Etiam ultricies ante sit amet ipsum dapibus, ac
            mollis arcu luctus.
          </p>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Curabitur a dictum leo. Etiam lobortis est
            lacus, luctus blandit nunc posuere non. Quisque dignissim varius
            ultricies. Pellentesque auctor auctor leo. Aliquam id augue non
            mauris ullamcorper ultrices. Vestibulum vestibulum, magna nec
            tincidunt vulputate, ex lectus vehicula quam, non sagittis urna
            libero sit amet quam. Ut consequat, leo ut iaculis feugiat, urna mi
            mollis magna, sit amet varius dui massa sed metus. Nulla sit amet
            sem est. Quisque a ante risus. Quisque pulvinar, mauris in lobortis
            egestas, lacus justo egestas nisi, quis egestas ipsum elit sed
            lacus. Aliquam eget venenatis mi, id dignissim justo. Nullam mi dui,
            pulvinar quis dictum sed, lobortis a justo. Morbi sed nulla vitae
            urna malesuada malesuada.
          </p>
        </div>
        <span className="border border-dark rounded">
          <div
            id="carouselSlides"
            className="carousel slide"
            data-ride="carousel"
            style={{
              alignContent: 'center',
              marginLeft: '100px',
              marginRight: '100px'
            }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="https://www.marketmymarket.com/wp-content/uploads/2017/03/old-captcha-1024x332.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="https://www.marketmymarket.com/wp-content/uploads/2017/03/old-captcha-1024x332.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="https://www.marketmymarket.com/wp-content/uploads/2017/03/old-captcha-1024x332.png"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// connect(mapStateToProps)()

export default AboutUs;
