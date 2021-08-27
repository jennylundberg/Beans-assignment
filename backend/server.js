const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5050
const menuRouter = require('./index')

app.use(cors())
app.use(express.json())
app.use('/api/beans', menuRouter)

app.listen(PORT, () => console.log('Server started on port 5050'));