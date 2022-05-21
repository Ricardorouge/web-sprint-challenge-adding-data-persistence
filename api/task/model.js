// build your `Task` model here
const db = require('../../data/dbConfig')

function getALL(){
    return db('tasks as t')
    .join('projects as p','p.project_id','t.project_id')
    .select('t.*','p.project_name','p.project_description')
}

function getById(id){
    return db('tasks as t')
    .join('projects as p')
    .select('t.*','p.project_name','p.project_description')
    .where({task_id:id})
    .first()
}

function add(task){
    db('tasks').insert(task)
    .then(result=>{
        return getById(result)
    })
}

module.exports = {
    getALL,
    getById,
    add,
}