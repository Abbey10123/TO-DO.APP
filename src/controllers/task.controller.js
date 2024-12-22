const TaskService = require ("../services/task.service");

const createTask = async (req, res)=>{
    const payload = req.body;
    const user = req.user;
    console.log(user)
    const creatingTask = await TaskService.createTask({
        description: payload.description,
        user
    })
    return res.status(creatingTask.code).json(creatingTask)
}

const getTask = async (req, res)=>{
    const taskId = req.params.taskId
    const gettingTask = await TaskService.getTask({
        taskId
    })
    return res.status(gettingTask.code).json (gettingTask)
    
}

const getByStatus = async (req, res)=>{
    const status = req.params.status;
    const user = req.user._id;
    const gettingTaskStatus = await TaskService.getByStatus({
        status,
        user
    })
    return res.status(gettingTaskStatus.code).json(gettingTaskStatus)
    
}

const getAllTask = async (req, res)=>{
    const userId = req.user._id;

    const gettingAllTask = await TaskService.getAllTask({
        userId
    })
    return res.status(gettingAllTask.code).json(gettingAllTask)
    
}

const updateTask = async (req, res)=>{
    const payload = req.body;
    const taskId = req.params.taskId;
    const user = req.user;
    const updatingTask = await TaskService.updateTask({
        taskId,
        status: payload.status,
        user
    })
    return res.status(updatingTask.code).json(updatingTask);
}

const deleteTask = async (req, res)=>{
    const taskId = req.params.taskId;
    const user = req.user;
    const deleteResponse = await TaskService.deleteTask({
        taskId,
        user
    })
    return res.status(deleteResponse.code).json(deleteResponse);
    
}

module.exports ={
    createTask,
    getTask,
    getByStatus,
    getAllTask,
    updateTask,
    deleteTask
}