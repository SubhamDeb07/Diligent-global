const express = require('express')
const app = express()
const studentRoute  = require('./routes/student')
const parentRoute  = require('./routes/parents')
const teacherRoute  = require('./routes/teacher')


const Port = 3000

app.use(express.json())

app.use('/student', studentRoute)
app.use('/parent', parentRoute)
app.use('/teacher', teacherRoute)


app.listen(()=>{
    console.log(`App running on port ${Port}`)
})