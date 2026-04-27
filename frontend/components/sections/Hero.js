// ================================================
// BAGIAN  : Hero Section
// ANGGOTA : Alif
// TUGAS   : Section pertama landing page
// ISI     : Headline, sub-headline, tombol daftar
// ================================================

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-yellow-200 font-semibold mb-3">
          Lembaga Pelatihan Kerja Resmi
        </p>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Wujudkan Karir Impian Bersama{" "}
          <span className="text-yellow-300">LPK BOSEYO</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10">
          Persiapkan diri untuk bekerja ke luar negeri dengan pelatihan bahasa,
          skill kerja, dan pendampingan dokumen secara profesional.
          Bersama LPK BOSEYO, peluang kerja Jepang dan Korea jadi lebih dekat.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#program"
            className="bg-yellow-300 text-blue-900 px-7 py-3 rounded-xl font-bold shadow-md hover:bg-yellow-200 transition"
          >
            Daftar Sekarang
          </a>

          <a
            href="#tentang"
            className="border-2 border-white px-7 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-800 transition"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6 flex-wrap text-sm text-white/90">
          <div className="bg-white/15 px-5 py-3 rounded-xl">
             Pelatihan Bahasa
          </div>
          <div className="bg-white/15 px-5 py-3 rounded-xl">
             Pembinaan Skill Kerja
          </div>
          <div className="bg-white/15 px-5 py-3 rounded-xl">
             Pendampingan Dokumen
          </div>
        </div>
      </div>
    </section>
  );
}