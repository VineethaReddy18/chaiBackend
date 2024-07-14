const express = require('express')
const dotenv=require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("heyy!!you are at twitter")
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('youtube')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})