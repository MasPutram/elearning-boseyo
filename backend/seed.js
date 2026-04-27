const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const User = require('./models/User')

dotenv.config()

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  
  const hashedPassword = await bcrypt.hash('password123', 10)
  
  await User.create({
    nama: 'Siswa Test',
    email: 'siswa@test.com',
    password: hashedPassword,
    role: 'siswa'
  })

  console.log('User berhasil dibuat!')
  console.log('Email: siswa@test.com')
  console.log('Password: password123')
  process.exit()
}

seed()