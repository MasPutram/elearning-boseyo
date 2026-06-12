// ================================================
// BAGIAN  : Halaman Login
// ANGGOTA : fakhriza
// TUGAS   : Form login dengan email & password
// ================================================
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.message)
        return
      }

      // Simpan token & redirect ke dashboard
      localStorage.setItem('token', data.token)
      router.push('/dashboard')

    } catch (err) {
      alert('Server error, coba lagi!')
    }
  }
//  const handleLogin = (e) => {
//    e.preventDefault();
    // Simulasi login sukses tanpa database
//    alert(`Simulasi Login Berhasil!\nEmail yang diketik: ${email}`);
//    router.push("/dashboard"); // Otomatis pindah ke halaman coming soon


  return (
    // Tambahkan class 'relative' di sini agar tombol bisa diam di pojok
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: "url('/korea.png')" }}>
      
      {/* Tombol Kembali ke Dashboard */}
      <Link 
        href="/" 
        className="absolute top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md text-blue-700 font-bold rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>

      </Link>

      {/* Kotak Form Login */}
      <div className="w-full max-w-md p-8 bg-white/95 rounded-xl shadow-md z-10 relative">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login Boseyo</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none" 
              placeholder="masukkan email..." 
            />
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none" 
              placeholder="••••••••" 
            />
          </div>

          <button type="submit" className="w-full py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Masuk
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun? <Link href="/register" className="text-blue-600 font-bold hover:underline">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
}