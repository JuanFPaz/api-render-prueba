const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({mensaje:'Hola Fonky! n.n'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})