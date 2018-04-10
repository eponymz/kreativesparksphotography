const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: profile.id,
        email: profile.emails
      });
      if (existingUser) {
        return done(null, existingUser);
        console.log('User exists. Moving along...');
      }

      if (!existingUser) {
        console.log(profile.id);
        console.log(profile.emails);
        return done(false, existingUser);
      }

      // const user = await new User({
      //   googleId: profile.id,
      //   email: profile.emails
      // }).save();
      // done(null, user);
      // console.log('User created. Moving along...');
    }
  )
);
