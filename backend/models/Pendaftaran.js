const mongoose = require('mongoose')

const PendaftaranSchema = new mongoose.Schema({
  program: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  whatsapp: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  buktiBayar: {
    type: String,
    required: true  
  },
  status: {
    type: String,
    enum: ['pending', 'diterima', 'ditolak'],
    default: 'pending'
  }
}, { timestamps: true })

module.exports = mongoose.model('Pendaftaran', PendaftaranSchema)