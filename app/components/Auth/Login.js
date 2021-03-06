import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';

class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-2 role-manager">
            <h1><span className="fa fa-sign-in"></span> Login</h1>

            <form action="/login" method="post">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>

                <button type="submit" className="btn btn-warning btn-lg">Login</button>
            </form>

            <hr />

            <p>Need an account?
              <a href="/signup"> Signup</a>
            </p>
            <p>Or go
              <a href="/"> home</a>.
            </p>

        </div>
      </div>
    );
  }
}

export default Login;
