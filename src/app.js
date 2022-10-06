
const express = require('express')
const app = express()

app.use(express.json())

const port = 8000

const usersRouter = require("./CrubUsers/crub.router").router


app.get('/', (req,res) => {
    res.status(200).json({message:"all eeee OK"})
})

app.use('/api/v1', usersRouter)


app.listen(port, () => {
    console.log(`Sever started at port ${port} `)
})