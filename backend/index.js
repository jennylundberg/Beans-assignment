const { Router } = require('express')
const router = new Router()
const fs = require('fs');

//GET

router.get('/', (req, res) => {
    const menu = fs.createReadStream('data.json')
    menu.pipe(res)
})


module.exports = router
//POST
// http://localhost:5050/api/beans