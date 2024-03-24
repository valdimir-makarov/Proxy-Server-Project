
const express = require('express')
const app = express()
const port = 3000

 require('dotenv').config()
const Proxy = require('./routes/router')
 const rateLimit =  require('./routes/router')
const rateLimitMiddleware = require('./ratelimiter')
 

app.use(rateLimitMiddleware)
app.get('/', (req, res) => {






  res.send('Hello World!')
})
app.use('/proxy/add',Proxy);
app.use('/proxy',Proxy)

app.use('/ratelimiter',rateLimit)





  console.log("bubuntghtgfdfdgdg")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})