import auth0 from 'auth0-js'

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'weverton.auth0.com',
      clientID: 'eK9yLT31zmXhccG3AKBVtnE24GbUSo3a',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession() {
    
  }

  login() {
    this.auth0.authorize();
  }
}

const Auth0Cliente = new Auth0();
export default Auth0Cliente;