// ================================================
// BAGIAN  : Testimoni Section
// ANGGOTA : Relita
// TUGAS   : Section 4 landing page
// ISI     : Ulasan dan testimoni dari siswa boseyo (bisa pakai data dummy dulu, nanti kalau sudah ada data resmi bisa diganti)
// ================================================

import React from 'react'

function Testimoni() {
  const testimoniData = [
    {
      nama: "Ahmad Fauzi",
      program: "Magang Korea Selatan",
      foto: "/images/testi1.jpg",
      komentar: "Alhamdulillah berkat LPK ini saya bisa magang di perusahaan elektronik besar di Seoul. Prosesnya lancar!"
    },
    {
      nama: "Dewi Lestari",
      program: "Magang Jepang",
      foto: "/images/testi2.jpg",
      komentar: "Pelatihannya sangat membantu, terutama bahasa Jepang. Sekarang saya kerja di pabrik otomotif di Osaka."
    },
    {
      nama: "Rizki Pratama",
      program: "Magang Taiwan",
      foto: "/images/testi3.jpg",
      komentar: "LPK ini terpercaya, semua proses transparan. Saya dapat penghasilan yang bagus di Taiwan."
    }
  ]

  return (
    <section className="py-16 px-4 bg-white" id='testimoni'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Testimoni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimoniData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md text-center">
              <img 
                src={item.foto} 
                alt={item.nama} 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500" 
              />
              <h3 className="font-bold text-gray-800">{item.nama}</h3>
              <p className="text-sm text-blue-600 mb-3">{item.program}</p>
              <p className="text-gray-600 italic">{item.komentar}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoni
