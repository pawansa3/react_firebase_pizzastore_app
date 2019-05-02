import React from 'react';
import { firebaseApp } from '../base';
import Login from './Login';
const firebase = require('firebase/app');
require('firebase/auth');

class Account extends React.Component {
    
    state = { uid: null };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.authHandler({ user });
        }
        });
    }

    authHandler = async authData => {
        this.setState({
            uid: authData.user.uid
        });
        console.log(this.state.uid, authData.user.email);
    };

    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    return (
      <div>
        <p className="textColor">
          You are now Logged in! Your order has been placed!{" "}
        </p>
        {logout}
      </div>
    );
  }
}

export default Account;