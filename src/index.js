import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <React.StrictMode>

<Auth0Provider
   
  //  domain='dev-ydeqq4ws.us.auth0.com'
  //   clientId='G9WFBumIxcY6TMFNwAdrIVEHTRmePzL7'
   
   
   domain={process.env.REACT_APP_SERVER}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}

    
    

  >

    <App />
    </Auth0Provider>,

  </React.StrictMode>,
  document.getElementById('root')
);
