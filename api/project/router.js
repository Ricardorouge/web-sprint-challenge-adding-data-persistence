// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/',(req,res,next)=>{
    Projects.getALL()
    .then(result=>{
        result.map(project=>{
            project.project_completed === 0?
            project.project_completed = false :
            project.project_completed = true
        })
        res.json(result)
    })
    .catch(next)
})

router.post('/',async (req,res,next)=>{
const {project_name} = req.body
!project_name?
res.status(400).json({message:'project_name is required'}):
Projects.add(req.body)
.then(result=>{
    if(result.project_completed === 0){
        result.project_completed = false
    } else{ result.project_completed = true}
    res.status(201).json(result)
})
.catch(next)
})


module.exports = router