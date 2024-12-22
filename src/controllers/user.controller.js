const UserService = require ("../services/user.service");

const signUp = async (req, res)=>{

    const payload = req.body;
    const signUpResponse = await UserService.signUp({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        userName: payload.username,
    })
    res.status(signUpResponse.code).json(signUpResponse)

}

const login = async (req, res)=>{

    const payload = req.body;
    const loginResponse = await UserService.login({
        email: payload.email,
        password: payload.password,
        
    })

    res.status(loginResponse.code).json(loginResponse)

}

module.exports = {
    signUp,
    login
}