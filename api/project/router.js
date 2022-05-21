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


module.exports = router