import http from 'http';
import express from 'express'

const app = express();
const port = 5000

app.use(express.json())

app.get('/', (req , res) => {
  res.status(200).json({
    message : 'conseguimos criar um servidor express'
  })
})

app.listen(port, () => {
  console.log(port)
})

