// ================================================
// BAGIAN  : Footer
// ANGGOTA : Relita
// TUGAS   : Footer bagian bawah halaman
// ISI     : Logo, alamat LPK Boseyo, 
//           link media sosial, copyright
// ================================================

import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">LPK</h3>
          <p className="text-gray-300 text-sm">Lembaga Pelatihan Kerja terpercaya untuk program magang ke Korea Selatan, dan Jepang. Siap mengantarkan Anda meraih mimpi kerja di luar negeri.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Program Kami</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/korea" className="hover:text-blue-400 transition">Magang Korea Selatan</a></li>
            <li><a href="/jepang" className="hover:text-blue-400 transition">Magang Jepang</a></li>
            <li><a href="/pelatihan" className="hover:text-blue-400 transition">Pelatihan Bahasa</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Hubungi Kami</h4>
          <p className="text-gray-300 text-sm">Email: info@lpk.com</p>
          <p className="text-gray-300 text-sm">WhatsApp: 0812-3456-7890</p>
          <p className="text-gray-300 text-sm">Alamat: Jakarta, Indonesia</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400 text-sm">&copy; 2024 LPK. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
