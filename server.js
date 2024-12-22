const app = require ('./app');

require('./db').connectToMongoDB()


const port = 5005

app.listen(port, ()=> {
    console.log (`app is running on ${port}`)
})