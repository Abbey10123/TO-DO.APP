const Router = require ('express').Router
const TaskController = require ('../controllers/task.controller');
const AuthMiddleware = require('../middlewares/user.middleware');

const route = Router()

route.get("/:status",AuthMiddleware.TokenValidator, TaskController.getByStatus);


route.post("/create", AuthMiddleware.TokenValidator,TaskController.createTask);
route.get("/", AuthMiddleware.TokenValidator, TaskController.getAllTask);
route.get("/:taskId",AuthMiddleware.TokenValidator, TaskController.getTask);
route.patch("/:taskId",AuthMiddleware.TokenValidator,TaskController.updateTask);
route.delete("/:taskId",AuthMiddleware.TokenValidator,TaskController.deleteTask);


module.exports = route
