// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/',(req,res,next)=>{
    Tasks.getALL()
    .then(result=>{
        result.map( task=>{
            task.task_completed === 0?
            task.task_completed = false :
            task.task_completed = true
        })
        res.json(result)
    })
    .catch(next)
})

module.exports = router