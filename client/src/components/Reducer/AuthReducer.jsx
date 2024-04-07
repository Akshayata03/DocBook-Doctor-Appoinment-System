export default function AuthReducer(state=[null,0],action){
    switch(action.type){
        case "login":
            localStorage.setItem('username', action.data.username)
            localStorage.setItem('role', action.data.role)
            localStorage.setItem('token', action.data.token)
            return [action.data.username, action.data.role, action.data.token]
        case "logout":
            localStorage.removeItem('username')
            localStorage.removeItem('role')
            localStorage.removeItem('token')
            return [null,0]
        default:
            return state
    }
}
//action={"type":"login", data:{"un":user_name,"role":role_val}}
