
const initialValue = {
    username: '',
    role: ''
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}