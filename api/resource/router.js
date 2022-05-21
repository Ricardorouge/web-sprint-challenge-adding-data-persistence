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

router.post('/',async (req,res,next)=>{
    const {resource_name} = req.body
    if(!resource_name){
        res.status(400).json({message:'resource_name is required'})
    }else{
        const exists = await Resources.getByName(resource_name)
            if(exists){
                res.status(400).json({message:'resource_name must be unique'})
                console.log(exists)
            } else{
                Resources.add(req.body)
                .then(result=>{
                    console.log(result)
                    res.status(201).json(result)
                })
                .catch(next)
            }
        }  
    })
    
module.exports =router