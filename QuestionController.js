const Database = require('../src/db/config')

module.exports = {
    async index(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password


        console.log(`room =${roomId}, questionId = ${questionId}
        action = ${action}, password = ${password}`)    

     
    }
}
