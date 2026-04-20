const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const Pendaftaran = require('../models/Pendaftaran')

// Setup penyimpanan file upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// POST /api/pendaftaran
router.post('/', upload.single('buktiBayar'), async (req, res) => {
  try {
    const { program, nama, whatsapp, email } = req.body

    const pendaftaran = new Pendaftaran({
      program,
      nama,
      whatsapp,
      email,
      buktiBayar: req.file.path
    })

    await pendaftaran.save()

    res.status(201).json({ 
      message: 'Pendaftaran berhasil dikirim, tunggu konfirmasi admin',
      data: pendaftaran
    })

  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router