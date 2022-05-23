// build your `Task` model here
const db = require('../../data/dbConfig')

function getALL(){
    return db('tasks as t')
    .join('projects as p','p.project_id','t.project_id')
    .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name','p.project_description')
}

function getById(id){
    return db('tasks')
    .where({task_id:id})
    .first()
}

function add(task){
    db('tasks').insert(task)
    .then(result=>{
        return getALL(result)
    })
}

module.exports = {
    getALL,
    getById,
    add,
}