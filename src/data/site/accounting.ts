import { pick, type Locale } from '@/data/localized';

/** Alamat aplikasi Loka Kasir Accounting (web terpisah dari Web Admin kasir). */
export const ACCOUNTING_APP_URL = 'https://accounting.lokakasir.id/';

/**
 * Copy halaman `/accounting` dan teaser di beranda.
 * Harga dan masa trial harus sama dengan yang tampil di aplikasi Loka Kasir
 * Accounting (lokakasir-accounting-web, LandingPage.tsx).
 * Baru tersedia dalam bahasa Indonesia; bahasa lain jatuh ke versi ini.
 */
const id = {
  metaTitle: 'Loka Kasir Accounting — Software Akuntansi, Rekonsiliasi Bank & Coretax Online',
  metaDescription:
    'Kelola jurnal, AR Payment Link, pindai nota pembelian, Auto-Match mutasi bank CSV/MT940, persediaan, manufaktur, aset tetap, laporan PSAK 118, dan XML Coretax DJP. Coba gratis 14 hari.',
  home: 'Beranda',
  title: 'Loka Kasir Accounting',
  desc: 'Kelola pembukuan dari penjualan, AR Payment Link, pindai nota pembelian, dan Auto-Match bank hingga laporan keuangan PSAK 118 serta XML Coretax e-Faktur & e-Bupot Unifikasi. Gunakan mandiri atau hubungkan dengan Loka Kasir.',
  ctaPrimary: 'Buka Loka Kasir Accounting',
  ctaSecondary: 'Lihat fitur',
  heroNote: 'Akun Accounting terpisah dari akun kasir. Integrasi dengan Loka Kasir bisa dinyalakan kapan saja.',
  flowTitle: 'Dari nota harian ke laporan keuangan & pajak',
  flowDesc: 'Pindai nota, tagih piutang lewat link WhatsApp, atau hubungkan kasir — Accounting menyusunnya menjadi jurnal, rekonsiliasi bank, dan laporan.',
  flow: [
    { title: 'Catat, pindai, atau sinkron POS', desc: 'Tarik penjualan dari Loka Kasir POS, pindai PDF nota supplier, atau kirim AR Payment Link ke pelanggan.' },
    { title: 'Auto-Match bank & jurnal otomatis', desc: 'Impor mutasi CSV (BCA, Mandiri, BRI, BNI) atau MT940 lalu cocokkan otomatis ke jurnal dalam satu klik.' },
    { title: 'Laporan PSAK 118 & XML Coretax', desc: 'Laba rugi, neraca, arus kas, buku besar, serta ekspor XML Coretax e-Faktur dan e-Bupot Unifikasi siap diunduh.' },
  ],
  featuresTitle: 'Satu sistem untuk seluruh siklus pembukuan',
  featuresDesc: 'Catat sekali. Transaksi, mutasi bank, persediaan, pajak, dan laporan memakai data yang sama.',
  features: [
    { icon: 'report', title: 'Laporan keuangan & PSAK 118', desc: 'Laba rugi, neraca, arus kas langsung/tidak langsung, buku besar, neraca saldo, dan penyajian sesuai PSAK 118.' },
    { icon: 'receipt', title: 'AR Payment Link & pindai nota', desc: 'Bagikan link tagihan piutang (/pay) via WhatsApp dengan pelunasan Duitku otomatis, dan pindai PDF nota supplier jadi draf faktur.' },
    { icon: 'bank', title: 'Impor CSV/MT940 & Auto-Match bank', desc: 'Impor rekening koran BCA, Mandiri, BRI, BNI, atau SWIFT MT940 lalu rekonsiliasi dengan saran pencocokan otomatis.' },
    { icon: 'box', title: 'Persediaan, manufaktur & aset', desc: 'Kartu stok FIFO/Moving Average, multi-gudang, landed cost, BOM manufaktur, dan penyusutan aset tetap.' },
    { icon: 'shield', title: 'Kontrol tim, approval & grup', desc: 'Hak akses per peran, kebijakan approval berjenjang, kunci periode, audit trail, MFA, dan konsolidasi grup multi-entitas.' },
    { icon: 'chart', title: 'Coretax e-Faktur & e-Bupot', desc: 'Ekspor XML Coretax DJP untuk e-Faktur dan e-Bupot Unifikasi (PPh 21/22/23/4(2)/26) dengan validasi NPWP/NIK 16 digit, SPT PPN, dan anggaran proyek.' },
  ],
  pricingTitle: 'Harga',
  pricingAmount: 'Rp149.000',
  pricingUnit: '/ organisasi / bulan',
  pricingPoints: [
    'Trial 14 hari dengan seluruh fitur terbuka',
    'Impor mutasi bank CSV/MT940 & Auto-Match rekonsiliasi',
    'XML Coretax e-Faktur & e-Bupot Unifikasi + AR Payment Link',
    'Tidak diperpanjang otomatis · Integrasi Loka Kasir opsional',
  ],
  pricingNote: 'Langganan Accounting terpisah dari paket Loka Kasir.',
  faqTitle: 'Pertanyaan umum',
  faqs: [
    { q: 'Apakah harus memakai Loka Kasir?', a: 'Tidak. Loka Kasir Accounting bisa dipakai sebagai aplikasi pembukuan mandiri. Integrasi dengan Loka Kasir bersifat opsional.' },
    { q: 'Bank dan pajak Coretax apa saja yang didukung?', a: 'Mendukung impor rekening koran CSV BCA, Mandiri, BRI, BNI, dan SWIFT MT940 dengan Auto-Match otomatis, serta ekspor XML Coretax DJP untuk e-Faktur dan e-Bupot Unifikasi (PPh 21/22/23/4(2)/26) lengkap dengan validasi NPWP/NIK 16 digit.' },
    { q: 'Bagaimana cara kerja AR Payment Link dan Pindai Nota?', a: 'Piutang usaha dapat dibuatkan link bayar (/pay/:token) untuk dikirim via WhatsApp dan dilunasi otomatis lewat Duitku. Untuk pembelian, unggah PDF/teks nota supplier agar menjadi draf Faktur Pembelian otomatis.' },
    { q: 'Apa bedanya dengan laporan di Web Admin?', a: 'Web Admin menampilkan laporan penjualan dan stok outlet. Accounting adalah pembukuan lengkap: jurnal, buku besar, neraca PSAK 118, rekonsiliasi bank, utang-piutang, manufaktur, aset tetap, dan konsolidasi grup.' },
  ],
  teaserEyebrow: 'Pembukuan usaha',
  teaserTitle: 'Loka Kasir Accounting',
  teaserDesc: 'Impor mutasi bank dengan Auto-Match, pindai nota pembelian, kirim link bayar piutang via WhatsApp, lalu baca laporan keuangan PSAK 118 dan ekspor XML Coretax dari satu tempat.',
  teaserPoints: [
    'Auto-Match mutasi bank CSV/MT940 & AR Payment Link',
    'Pindai PDF nota pembelian, stok, manufaktur & aset tetap',
    'Laporan PSAK 118, XML Coretax e-Faktur & e-Bupot Unifikasi',
  ],
  heroLink: 'Kenali Loka Kasir Accounting',
  previewCaption: 'Tampilan akun demo Loka Kasir Accounting',
};

export const getAccountingCopy = (locale: Locale) => pick({ id }, locale);
