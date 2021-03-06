var LocalStrategy   = require('passport-local').Strategy;
var UserDb = require('../db/user-db');
var AuthDb = require('../db/auth-db');
var User = require('../models/user');
var UserHelper = require('../helpers/user-helper');
var _ = require('underscore-node');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        UserDb.findById(id).then(function(user) {
            var err = null; //TODO: catch error
            done(err, user);
        });
    });


    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        UserDb.findByEmail(email).then(function(user) {
            // if there are any errors, return the error before anything else
            //if (err)
             //   return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!UserHelper.validPassword(password, user.password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            //TODO: do a join with user instead of another db call
            var loggedInUserRoles = [];
            AuthDb.getUserRoles(user.id).then(function(userRoles){
                var userRoleIds = _.each(userRoles, function(userRole){
                    loggedInUserRoles.push(userRole.role_id);
                });
                req.session.userRoles = loggedInUserRoles;
                // all is well, return successful user
                return done(null, user);
            });


        });

    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        UserDb.findByEmail(email)
            .then(function(user) {
                // if there are any errors, return the error
               // if (err)
                  //  return done(err);

                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {

                    // if there is no user with that email
                    // create the user
                    var firstName = "test first name";
                    var lastName = "test last name";
                    var newUser = new User(firstName, lastName, email, password);

                    UserDb.createUser(newUser).then(function(newUserFromDb){
                        return done(null, newUserFromDb);
                    });
                }
        });
    }));
};
