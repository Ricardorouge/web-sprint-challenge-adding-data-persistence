// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.get('/',(req,res,next)=>{
    Resources.getAll()
    .then(result=>{
        res.json(result)
    })
    .catch(next)
})

router.post('/',(req,res,next)=>{
    const {resource_name} = req.body
    if(!resource_name){
        res.status(400).json({message:'resource_name is required'})
    }else{
        Resources.getByName(resource_name)
        .then((exists)=>{
            if(!exists){
                res.status(400).json({message:'resource_name must be unique'})
            } else{
                Resources.add(req.body)
                .then(result=>{
                    res.status(201).json(result)
                })
                .catch(next)
            }
        })
        .catch(next)
            }
    })
    
module.exports =router