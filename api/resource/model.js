// build your `Resource` model here
const db = require('../../data/dbConfig')


function getAll(){
    return db('resources')
}

function getById(id){
    return db('resources').where({resource_id:id}).first()
}

function add(resource){
    return db('resources').insert(resource)
    .then(result=>{
         return getById(result)
    })
}
function getByName(name){
    return db('resources').where({resource_name:name}).first()
}

module.exports ={
    getAll,
    getById,
    add,
    getByName
}