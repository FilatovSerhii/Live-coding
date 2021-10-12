import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// input:props(obj)
// output:JSX

// algo
// 1. show Login by default
// 2. after login click -hide Login & show Spinner for 2 seconds
// 3. after 2 seconds -hide spinner & show Logout
// 4. after Logout click- hide Logout & show Login

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    this.setState({ isProcessing: true });
    setTimeout(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;
    // const isLoggedIn=this.state.isLoggedIn
    if (isProcessing) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;

// 0. make a layout(html)
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic
