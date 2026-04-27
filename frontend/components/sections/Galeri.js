// ================================================
// BAGIAN  : Galeri Section
// ANGGOTA : Relita
// TUGAS   : Section 5 landing page
// ISI     : Gambar-gambar fasilitas boseyo (pakai gambar yang ada aja dulu, nanti kalau sudah ada gambar resmi bisa diganti)
// ================================================

'use client'
import React from 'react'

function Galeri() {
  const fotoFoto = [
    { src: "/images/galeri1.jpg", judul: "Pelatihan Bahasa Korea" },
    { src: "/images/galeri2.jpg", judul: "Pelatihan Bahasa Jepang" },
    { src: "/images/galeri3.jpg", judul: "Kegiatan Kelas" },
    { src: "/images/galeri4.jpg", judul: "Praktek Kerja" },
    { src: "/images/galeri5.jpg", judul: "Wisuda Peserta" },
    { src: "/images/galeri6.jpg", judul: "Pemberangkatan ke Korea" }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50" id="galeri">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Galeri Kegiatan</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotoFoto.map((foto, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={foto.src} 
                alt={foto.judul} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
              />
              <p className="p-3 text-center text-gray-700 font-medium">{foto.judul}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeri
