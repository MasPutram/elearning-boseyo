// ================================================
// BAGIAN  : FAQ Section
// ANGGOTA : Relita
// TUGAS   : Section 6 landing page
// ISI     : Pertanyaan dan jawaban yang sering diajukan terkait boseyo (bisa pakai pertanyaan yang sudah ada di google form, nanti kalau sudah ada pertanyaan resmi bisa diganti)
// ================================================

'use client'
import React, { useState } from 'react'

function FAQ() {
  const [bukaIndex, setBukaIndex] = useState(null)

  const faqData = [
    {
      pertanyaan: "Bagaimana cara mendaftar?",
      jawaban: "Datang langsung ke kantor kami atau daftar online melalui website. Bawa KTP, Ijazah terakhir, dan pas foto."
    },
    {
      pertanyaan: "Berapa biaya pendaftaran?",
      jawaban: "Biaya pendaftaran Rp 500.000. Biaya pelatihan dan penempatan bervariasi tergantung negara tujuan."
    },
    {
      pertanyaan: "Berapa lama prosesnya?",
      jawaban: "Sekitar 6-12 bulan termasuk pelatihan bahasa, keterampilan, dan proses visa."
    },
    {
      pertanyaan: "Apakah ada jaminan kerja?",
      jawaban: "Ya, kami menjamin penempatan kerja di perusahaan mitra di Korea, Jepang, atau Taiwan sesuai program yang dipilih."
    }
  ]

  function klikFAQ(index) {
    if (bukaIndex === index) {
      setBukaIndex(null)
    } else {
      setBukaIndex(index)
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50" id='faq'>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                onClick={() => klikFAQ(index)}
              >
                <span className="font-medium text-gray-800">{item.pertanyaan}</span>
                <span className="text-2xl text-blue-600">{bukaIndex === index ? '-' : '+'}</span>
              </div>
              {bukaIndex === index && (
                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                  {item.jawaban}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
