const Database = require('../db/config')

module.exports = {
    async list(req,res){
        const db = await Database()
        const rooms = await db.all(`SELECT * FROM rooms`)

        res.render('admin',{rooms: rooms})
    },
    async delete(req,res){
        const db = await Database()
        const roomId = req.params.room
        
        await db.run(`DELETE FROM rooms WHERE id = ${roomId}`)
        
        res.redirect('/admin')
    }
}