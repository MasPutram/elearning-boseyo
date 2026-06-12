// ================================================
// BAGIAN  : Form Pendaftaran (Multi Step)
// ANGGOTA : Fakhriza
// TUGAS   : Step 1 pilih program, Step 2 data diri,
//           Step 3 upload bukti bayar
// ================================================

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation' 

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    program: "",
    nama: "",
    email: "",
    telepon: "",
    buktiBayar: null
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const form = new FormData()
    form.append('program', formData.program)
    form.append('nama', formData.nama)
    form.append('email', formData.email)
    form.append('whatsapp', formData.telepon)
    form.append('buktiBayar', formData.buktiBayar)

    const response = await fetch('http://localhost:5000/api/pendaftaran', {
      method: 'POST',
      body: form
    })

    const data = await response.json()

    if (!response.ok) {
      alert(data.message)
      return
    }

    alert('Pendaftaran berhasil dikirim! Tunggu konfirmasi admin.')
    router.push('/')

  } catch (err) {
    alert('Server error, coba lagi!')
  }
}

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    console.log("Data Pendaftaran dikirim:", formData);
//    alert("Pendaftaran berhasil dikirim! Silakan tunggu konfirmasi.");
//  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4 relative"
      style={{ backgroundImage: "url('/bg_korea.png')" }}>
      
      {/* Tombol Kembali ke Dashboard */}
      <Link 
        href="/" 
        className="absolute top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md text-blue-700 font-bold rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        
      </Link>

      {/* Overlay transparan agar form lebih mudah dibaca dan serasi dengan Login */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Tambahkan relative dan z-10 agar form berada di atas overlay */}
      <div className="w-full max-w-2xl bg-white/95 rounded-2xl shadow-xl overflow-hidden relative z-10">
        
        {/* Progress Bar Atas */}
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold text-center">Pendaftaran Siswa Baru</h2>
          <div className="flex justify-between mt-6 relative">
            <div className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 1 ? 'bg-white text-blue-600' : 'bg-blue-400 text-white'}`}>1</div>
            <div className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 2 ? 'bg-white text-blue-600' : 'bg-blue-400 text-white'}`}>2</div>
            <div className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 3 ? 'bg-white text-blue-600' : 'bg-blue-400 text-white'}`}>3</div>
            <div className="absolute top-5 left-0 w-full h-0.5 bg-blue-300 -z-0"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium">
            <span>Pilih Program</span>
            <span>Data Diri</span>
            <span>Pembayaran</span>
          </div>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit}>
            
            {/* STEP 1: Pilih Program */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h3 className="text-xl font-semibold text-gray-800">Langkah 1: Pilih Program Belajar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Korea Selatan", "Jepang"].map((item) => (
                    <label key={item} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.program === item ? 'border-blue-600 bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}>
                      <input 
                        type="radio" 
                        name="program" 
                        value={item} 
                        onChange={(e) => setFormData({...formData, program: e.target.value})}
                        className="hidden"
                      />
                      <span className="font-medium text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
                <button 
                  type="button" 
                  disabled={!formData.program}
                  onClick={handleNext}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all"
                >
                  Lanjut ke Data Diri
                </button>
              </div>
            )}

            {/* STEP 2: Data Diri */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-500">
                <h3 className="text-xl font-semibold text-gray-800">Langkah 2: Lengkapi Data Diri</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Masukkan nama sesuai KTP"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    value={formData.nama}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="email@contoh.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    value={formData.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="0812xxxx"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setFormData({...formData, telepon: e.target.value})}
                    value={formData.telepon}
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <button type="button" onClick={handleBack} className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-all">Kembali</button>
                  <button type="button" onClick={handleNext} className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">Lanjut ke Pembayaran</button>
                </div>
              </div>
            )}

            {/* STEP 3: Upload Bukti Bayar */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Langkah 3: Konfirmasi Pembayaran</h3>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    Silakan transfer biaya pendaftaran ke Rekening <strong>Bank Mandiri 123-456-7890</strong> a.n Boseyo Learning Center.
                  </p>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-all">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, buktiBayar: e.target.files[0]})}
                    className="hidden" 
                    id="upload-bukti" 
                  />
                  <label htmlFor="upload-bukti" className="cursor-pointer">
                    <p className="text-gray-500">Klik untuk unggah foto bukti transfer (.jpg / .png)</p>
                    {formData.buktiBayar && <p className="mt-2 text-blue-600 font-medium italic">{formData.buktiBayar.name}</p>}
                  </label>
                </div>
                <div className="flex gap-4 mt-6">
                  <button type="button" onClick={handleBack} className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-all">Kembali</button>
                  <button type="submit" className="flex-1 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-lg transition-all">Selesaikan Pendaftaran</button>
                </div>
              </div>
            )}

          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Sudah mendaftar? <Link href="/login" className="text-blue-600 font-bold hover:underline">Masuk ke Akun</Link>
          </p>
        </div>

      </div>
    </div>
  );
}