import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/loginButton.js'
// import LogoutButton from './LogoutButton'
// import Profile from './Profile'
import './Login.css';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          
          {/* <Profile/> */}
        </Card.Body>
        <LoginButton/>
      </Card>


    )
  }
}

export default withAuth0(Login);
