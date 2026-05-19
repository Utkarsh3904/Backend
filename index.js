import express from 'express'
const app = express()
const port = 4000

//get, put, post, delete (http request)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/search', (req,res)=>{
  res.send('hello nodemon is working perfectly fine')
})

//Servers side rendering is fast as it from backend

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
