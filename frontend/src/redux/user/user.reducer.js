import * as Types from "./user.types";

const initialState = {
    isAuthenticated: false,
    logging: true,
    loginChecked: false,
    loginFailed: false,
    errorMessage: "",
    userInfos: {}
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case Types.UNAUTHENTICATED:
            return { ...initialState, loginChecked: true }

        case Types.LOGGING:
            return { ...initialState, logging: true }

        case Types.LOGIN_SUCCESSFUL:
            return { ...state, isAuthenticated: true, logging: false, loginChecked: true, userInfos: action.payload }

        case Types.LOGIN_FAILED:
            return { ...state, isAuthenticated: false, logging: false, loginChecked: true, loginFailed: true, errorMessage: action.payload }    
                
        default:
            return state;
    }
}