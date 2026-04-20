const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/pendaftaran', require('./routes/pendaftaran'))

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API Boseyo berjalan!' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`)
})