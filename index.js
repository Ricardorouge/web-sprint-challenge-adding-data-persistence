// start your server here
const server = require('./api/server')
const port = process.env.PORT || 9000

server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})