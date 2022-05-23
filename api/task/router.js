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

router.post('/',(req,res,next)=>{
    const {task_description,project_id} = req.body
    if(!task_description || !project_id){
        res.status(400).json({message:'task description and project id required'})
    } else{
        Tasks.add(req.body)
            .then(result=>{
                
                result.task_completed === 0?
                result.task_completed = false :
                result.task_completed = true

                res.status(201).json(result)
            })
            .catch(next)
    }
})

module.exports = router