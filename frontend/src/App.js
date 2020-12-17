import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";
import './App.css';
import { checkLogin, login, logout } from "./redux/user/user.actions";

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(checkLogin(true)),
  login: (credentials) => dispatch(login(credentials)),
  logout: () => dispatch(logout(true)),
})

const App = props => {
  return (
    <div className="App">
      <BrowserRouter>
        {props.user.logging && 
          <>        
            {/* Loading screen */}
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
          </>
        }
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
