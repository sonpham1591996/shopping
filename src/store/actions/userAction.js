

export const updateUserInfo = (userInfo) => {
    return {
        type: 'UPDATE_USER_INFO',
        payload: userInfo
    }
}

export const getUserInfo = (state) => { // root state
    return state.userReducer
}