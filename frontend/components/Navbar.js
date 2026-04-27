// ================================================
// BAGIAN  : Navbar
// ANGGOTA : Alif
// TUGAS   : Navbar sticky dengan logo + menu
// MENU    : Beranda, Program, Tentang, Testimoni, 
//           Galeri, FAQ + tombol Hubungi Kami
// CATATAN : Klik menu scroll ke section (pakai #id)
//           Contoh: href="#program" → scroll ke 
//           <section id="program">
// ================================================

"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-extrabold tracking-wide">
          LPK <span className="text-yellow-300">BOSEYO</span>
        </div>

        <ul className="hidden md:flex gap-8 font-semibold">
          <li><a href="#hero" className="hover:text-yellow-300 transition">Beranda</a></li>
          <li><a href="#program" className="hover:text-yellow-300 transition">Program</a></li>
          <li><a href="#tentang" className="hover:text-yellow-300 transition">Tentang</a></li>
          <li><a href="#testimoni" className="hover:text-yellow-300 transition">Testimoni</a></li>
          <li><a href="#galeri" className="hover:text-yellow-300 transition">Galeri</a></li>
          <li><a href="#faq" className="hover:text-yellow-300 transition">FAQ</a></li>
        </ul>

        {/* Tombol Hubungi Kami Desktop */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 text-blue-900 px-5 py-2 rounded-xl font-bold hover:bg-yellow-200 transition"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          className="md:hidden text-3xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-6 py-4 space-y-4 font-semibold">
          <a href="#hero" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Beranda</a>
          <a href="#program" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Program</a>
          <a href="#tentang" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Tentang</a>
          <a href="#testimoni" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Testimoni</a>
          <a href="#galeri" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Galeri</a>
          <a href="#faq" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>FAQ</a>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-300 text-blue-900 text-center py-2 rounded-xl font-bold hover:bg-yellow-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}