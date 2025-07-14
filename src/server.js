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

// not found error handler
const { NotFoundError } = require('./utils/errors')
app.use((req, res, next) => {
  const error = new NotFoundError(`Route ${req.originalUrl} not found!`)
  next(error)
})

// global error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || 500
  return res.status(status).json({
    success: false,
    error: {
      name: err.name || 'Error',
      message: err.message || 'Internal Server Error'
    }
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
