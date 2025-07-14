const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// app middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('Nodejs CMS API: Hello from server...')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
