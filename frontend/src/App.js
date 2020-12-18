import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";
import './App.css';
import { Loading } from './Loading/Loading';
import { Login } from './Login/Login';
import { checkLogin, dismissErrMess, login, logout } from "./redux/user/user.actions";

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(checkLogin(true)),
  login: (credentials) => dispatch(login(credentials)),
  logout: () => dispatch(logout(true)),
  dismissErrMess: () => dispatch(dismissErrMess(true)),
})

const App = props => {
  const [loginChecked, setLoginChecked] = useState(false);
  useEffect(() => {
    if (!loginChecked) {
      props.checkLogin();
      setLoginChecked(true);
    }
  }, [loginChecked, props])


  return (
    <div className="App">
      <BrowserRouter>
        {props.user.logging &&
          <>
            {/* Loading screen */}
            <Loading />
          </>
        }

        {(!props.user.logging && props.user.isAuthenticated) &&
          <>
            {/* Authenticated routing */}
          </>
        }

        {!props.user.logging && !props.user.isAuthenticated &&
          <>
            {/* Login form with loginFailed and errorMessage as props */}
            <Login login={props.login} dismissErrMess={props.dismissErrMess} loginFailed={props.user.loginFailed} errorMessage={props.user.errorMessage} />
          </>
        }
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
