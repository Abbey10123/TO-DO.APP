const mongoose = require ('mongoose');
const shortid = require('shortid')


const TaskSchema = new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    user_id: String,
    description: String,
    status:{
        type: String,
        enum: ['pending', 'completed', 'deleted'], 
        default: 'pending', 
      },
    created_at: Date  

})

const TaskModel = mongoose.model('task', TaskSchema)

module.exports = TaskModel;