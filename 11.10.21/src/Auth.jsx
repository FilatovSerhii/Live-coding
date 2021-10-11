import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

//input - props(obj)
//output - jsx


// алгоритм
// 1 по умолчанию нужно показать компаненту по дефолту
// 2 после клика на логин нужно скрыть логин и показать спинер на 2секунды
// 3 после 2х секунд нужно скрыть спинер и поазать логаут
// 4 после клика Логаут, скрыть логаут и показать логин 


class Auth extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    loading: false,
  } 
  };

  toggleSpinner(loading) {
    this.setState({ loading });
  }

  handleLogin() {
    this.toggleSpinner(true);

    setTimeout(() => {
      this.toggleSpinner(false);

      this.setState({
        isLoggedIn: false,
      });
    }, 2000);
  }

  handleLogout() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner size={50} />;
    }

    return this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogin.bind(this)} />
    ) : (
      <Logout onLogout={this.handleLogout.bind(this)} />
    );
  }
}

export default Auth;
