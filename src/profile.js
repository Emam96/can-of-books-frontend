import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {

    const { user, isAuthenticated  } = this.props.auth0;
    // const user = this.props.auth0.user;
    // const isAuthenticated= this.props.auth0.isAuthenticated;
    return (
        isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
      );
  }
}

export default withAuth0(Profile);