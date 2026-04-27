// ================================================
// BAGIAN  : Program Section
// ANGGOTA : Alif
// TUGAS   : Section 2 landing page
// ISI     : buat card program yang isinya nama program, deskripsi singkat, benefit dan tombol "daftar sekarang" (bisa pakai data dummy dulu, nanti kalau sudah ada data resmi bisa diganti)
// ================================================

import Link from "next/link";

export default function Program() {
  const programs = [
    {
      nama: "Program Jepang",
      deskripsi:
        "Pelatihan bahasa Jepang intensif, budaya kerja, dan persiapan dokumen untuk kerja/magang di Jepang.",
      benefit: [
        "Kelas bahasa Jepang dari dasar",
        "Simulasi interview kerja",
        "Pelatihan budaya kerja Jepang",
        "Pendampingan dokumen keberangkatan",
      ],
    },
    {
      nama: "Program Korea",
      deskripsi:
        "Persiapan ujian EPS-TOPIK, latihan soal intensif, serta pembinaan skill kerja untuk Korea Selatan.",
      benefit: [
        "Materi EPS-TOPIK lengkap",
        "Try out dan latihan soal rutin",
        "Pendampingan pendaftaran ujian",
        "Pembinaan mental dan disiplin kerja",
      ],
    },
  ];

  return (
    <section id="program" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">
          Program Pelatihan
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Program Unggulan LPK BOSEYO
        </h2>

        <p className="text-gray-600 text-lg mb-12">
          Kami menyediakan program pelatihan unggulan untuk mempersiapkan peserta
          bekerja di luar negeri secara profesional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-7 shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                {item.nama}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                {item.deskripsi}
              </p>

              <h4 className="text-gray-900 font-semibold mb-3">Benefit:</h4>

              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                {item.benefit.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <Link
                href="/register"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Daftar Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}