// ================================================
// BAGIAN  : Dashboard Siswa
// ANGGOTA : fakhriza
// TUGAS   : Tampilkan halaman Coming Soon
// ================================================
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";  

export default function DashboardPage() {
  const router = useRouter();

    useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Ikon atau Ilustrasi Sederhana */}
        <div className="mb-8 inline-block p-4 bg-white rounded-full shadow-sm">
          <svg 
            className="w-16 h-16 text-blue-600 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Website <span className="text-blue-600">Coming Soon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto">
          Kami sedang membangun fitur pembelajaran terbaik untukmu. Dashboard interaktif elearning-boseyo akan segera hadir!
        </p>

        {/* Progress Bar Simulasi */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
            <span>Progress Pengembangan</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full w-[75%] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg"
          >
            Kembali ke Beranda
          </button>
          
          <Link 
            href="/login" 
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
          >
            Cek Akun Login
          </Link>
        </div>

        <footer className="mt-16 text-sm text-gray-500 font-medium">
          &copy; 2026 Elearning Boseyo Project. All rights reserved.
        </footer>
      </div>
    </div>
  );
}