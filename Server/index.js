
const express = require('express')
const app = express()
const port = 3000

 require('dotenv').config()
const Proxy = require('./routes/router')

 


app.get('/', (req, res) => {






  res.send('Hello World!')
})
app.use('/proxy/add',Proxy);
app.use('/proxy',Proxy)







  console.log("bubuntghtgfdfdgdg")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})