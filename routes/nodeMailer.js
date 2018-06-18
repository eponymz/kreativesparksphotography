const keys = require('../config/keys');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.post('/contact/send', (req, res) => {
    const transporter = nodeMailer.createTransport({
      service: 'Gmail',
      auth: {
        user: keys.emailKey,
        pass: keys.emailPassKey
      }
    })

    const mailOptions = {
      from: 'Kreative Sparks WebApp <isabey.dev@gmail.com>',
      to: 'isabey.dev@gmail.com',
      subject: 'Contact Request Email',
      text: 'Someone has reached out for information! Here is their details!\n Name: ' + req.body.name + 'Email: ' + req.body.email + 'Message: ' + req.body.message,
      html: '<p>Someone has reached out for information! Here is their details!</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Inquiry Message: ' + req.body.message + '</li>'
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.redirect('/contact')
      } else {
        console.log('Message Sent: ' + info.response);
        res.redirect('/');
      }
    })
  })
}