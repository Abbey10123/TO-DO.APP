const TaskModel = require("../models/task.model");

createTask = async ({ description, user }) => {
  try {
    const taskCreated = await TaskModel.create({
      description,
      user_id: user._id,
      created_at: new Date(),
    });
    return {
      code: 200,
      message: "Task created successfully",
      data: { 
        taskCreated
      },
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      data: null,
      message: error.message,
    };
  }
};

getTask = async ({ taskId }) => {
  try {
    const foundTask = await TaskModel.findOne({ _id: taskId });
    if (!foundTask) {
      return res.json(404, {
        message: "Task not found",
      });
    }
    return {
      code: 201,
      message: "successful",
      data: { foundTask },
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      data: null,
      message: error.message,
    };
  }
};

getByStatus = async ({ status, user }) => {
    try {
      const foundTask = await TaskModel.find({status: status, user_id: user });
      if (!foundTask) {
        return  {
            code: 404,
            success: false,
            message: "Task not found",
          };
      }
      return {
        code: 201,
        message: "successful",
        data: { foundTask },
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        data: null,
        message: error.message,
      };
    }
  };

getAllTask = async ({userId}) => {
  try {
    console.log(userId)
    const allTask = await TaskModel.find({user_id: userId});
    if (!allTask) {
        return res.json(404, {
          message: "Bad request",
        });
      }
    const viewTask = allTask.map(({ status, description }) => ({ status, description }));

    return {
      code: 200,
      message: "Successful",
      data: { viewTask },
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      data: null,
      message: error.message,
    };
  }
};

updateTask = async ({ taskId, status, user }) => {
  try {
    const update = await TaskModel.findOne({ _id: taskId });
    if (!update) {
      return  {
        code: 404,
        success: false,
        message: "Task not found",
      };
    }
    if (update.user_id !== user._id) {
      return {
        code: 404,
        success: false,
        message: "Bad Request",
      };
    }

    update.status = status;
    await update.save();
    
        return {
            code: 200,
            message: "Successful",
            data: { update },
          };
;
  } catch (error) {
    return {
      code: 500,
      success: false,
      data: null,
      message: error.message,
    };
  }
};

deleteTask = async ({ taskId, user }) => {
  try {
    const foundTask = await TaskModel.findOne({
      _id: taskId,
      user_id: user._id,
    });
    console.log(foundTask)
    if (!foundTask) {
        return  {
            code: 404,
            success: false,
            message: "Task not found",
          };
    }
    await foundTask.deleteOne({
      _id: taskId,
      user_id: user._id,
    });
    return {
      code: 201,
      message: "Deleted successfully",
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      data: null,
      message: error.message,
    };
  }
};

module.exports = {
  createTask,
  getTask,
  getByStatus,
  getAllTask,
  updateTask,
  deleteTask,
};
