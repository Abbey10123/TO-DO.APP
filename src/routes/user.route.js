const Router = require ('express').Router
const UserController = require ('../controllers/user.controller');

const route = Router()

route.post("/signup", UserController.signUp);
route.post("/login", UserController.login);

module.exports = route;