const express = require ('express');
const UserRoutes = require ('./src/routes/user.route')
const TaskRoutes = require ('./src/routes/task.route')


const app = express();

app.use(express.json());

app.use('/user', UserRoutes);
app.use('/tasks', TaskRoutes)

app.get("/", (req, res) =>{
    res.json({message: "Welcome to the home page"})
})


app.get('*', (req, res) => {
    res.json({ message: 'Route not found', code: 404 })
})

module.exports = app;
