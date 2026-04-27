// ================================================
// BAGIAN  : Tentang Section
// ANGGOTA : Alif
// TUGAS   : Section 3 landing page
// ISI     : Deskripsi singkat tentang boseyo, visi dan misi, serta nilai-nilai yang dipegang oleh boseyo (bisa pakai data dummy dulu, nanti kalau sudah ada data resmi bisa diganti)
// ================================================

export default function Tentang() {
  const nilaiNilai = [
    {
      title: "Integritas",
      desc: "Menjunjung kejujuran dan tanggung jawab dalam setiap proses pelatihan.",
    },
    {
      title: "Disiplin",
      desc: "Membentuk peserta didik agar memiliki etos kerja dan kedisiplinan tinggi.",
    },
    {
      title: "Profesional",
      desc: "Membekali peserta dengan skill dan sikap kerja sesuai standar luar negeri.",
    },
    {
      title: "Komitmen",
      desc: "Memberikan pendampingan dari awal pelatihan hingga proses keberangkatan.",
    },
  ];

  return (
    <section id="tentang" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">
            Tentang Kami
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang LPK BOSEYO
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            LPK BOSEYO adalah lembaga pelatihan kerja yang fokus dalam membimbing
            peserta untuk mempersiapkan diri bekerja ke luar negeri. Kami
            menyediakan pelatihan bahasa, skill kerja, serta pendampingan dokumen
            agar peserta siap menghadapi dunia kerja secara profesional.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi lembaga pelatihan kerja terpercaya yang mencetak tenaga kerja
              profesional, berkompeten, dan siap bersaing di tingkat internasional.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Menyediakan pelatihan bahasa dan keterampilan kerja berkualitas.</li>
              <li>Membentuk karakter disiplin dan etos kerja peserta.</li>
              <li>Memberikan pendampingan dokumen serta persiapan keberangkatan.</li>
              <li>Membangun jaringan kerja sama dengan perusahaan luar negeri.</li>
            </ul>
          </div>
        </div>

        {/* Nilai-nilai */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Nilai-Nilai yang Kami Pegang
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nilaiNilai.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-bold text-blue-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}