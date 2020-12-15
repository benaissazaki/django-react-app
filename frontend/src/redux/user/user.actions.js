import axios from "axios";
import jwt_decode from "jwt-decode";
import * as Types from "./user.types";
import { apiUrl } from "../../shared/apiUrl";

// Thunk actions

export const checkLogin = () => dispatch => {
    return dispatch(logging(true)).then(() =>
        localStorage.getItem("access_token")
            .then((accessToken) => {
                if (accessToken) {
                    const jwt = jwt_decode(accessToken);
                    const current_time = new Date().getTime() / 1000;

                    if (current_time > jwt.exp) {
                        return dispatch(unauthenticated(true));
                    }

                    else {
                        return dispatch(getUserInfos(true)).then(response => dispatch(loginSuccessful(response.data)));
                    }
                } else {
                    return dispatch(unauthenticated(true));
                }
            })

    )
}

export const login = (credentials) => dispatch => {
    return axios.post(`${apiUrl}api/token/`, credentials)
        .then(response => {
            localStorage.setItem("access_token", response.data.access);
            return dispatch(getUserInfos(true));
        })
        .then(response => dispatch(loginSuccessful(response.data)))
        .catch((response) => {
            return dispatch(loginFailed("Login Failed"));
        })
}

export const getUserInfos = () => dispatch => {
    const access = localStorage.getItem("access_token");
    return axios.get(`${apiUrl}api/user/`, {
        Authorization: `Bearer ${access}`
    })
        .then(response => dispatch(loginSuccessful(response.data)))
}

export const logout = () => dispatch => {
    localStorage.clear();
    return dispatch(unauthenticated(true));
}


// Standard actions

export const unauthenticated = () => ({
    type: Types.UNAUTHENTICATED
})

export const logging = () => ({
    type: Types.LOGGING
})

export const loginSuccessful = (userInfos) => ({
    type: Types.LOGIN_SUCCESSFUL,
    payload: userInfos
})

export const loginFailed = (errorMessage) = ({
    type: Types.LOGIN_FAILED,
    payload: errorMessage
})