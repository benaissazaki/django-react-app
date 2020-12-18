import { Box, Container, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {  } from "reactstrap";
import React from "react";
import { Control, LocalForm } from "react-redux-form";
import "./Login.css";
import user from "./img/user.svg";

export const Login = props => {
    return (
        <div id="login">
            <Container>
                <Box id="login-box">
                    <LocalForm onSubmit={(credentials => props.login(credentials))}>
                        <img src={user} alt="" id="logo"/>
                        <Control.text required model=".username" className="form-control" placeholder="Username" />
                        <Control.text required type="password" model=".password" className="form-control" placeholder="Password" />
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </LocalForm>
                </Box>
            </Container>
            <Snackbar open={props.loginFailed} onClose={props.dismissErrMess}>
                <Alert variant="filled" severity="error" onClose={props.dismissErrMess}>
                    {props.errorMessage}
                </Alert>
            </Snackbar>
        </div>
    )
}