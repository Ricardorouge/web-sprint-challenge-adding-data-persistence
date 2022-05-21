// build your `Project` model here
const db = require('../../data/dbConfig')

function getALL(){
    return db('projects')
}
function getById(id){
    return db('projects').where({project_id:id}).first()
}
function getByName(name){
    return db('projects').where({project_name:name}).first()
}

function add(project){
    return db('projects').insert(project)
    .then(result=>{
        return getById(result)
    })
}

module.exports = {
    getALL,
    getById,
    getByName,
    add
}