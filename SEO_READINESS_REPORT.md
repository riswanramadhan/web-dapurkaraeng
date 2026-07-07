# SEO Readiness Report - Dapur Karaeng Lu'Mu

Production URL: https://dapurkaraeng.dekatlokal.com/

## Audit SEO Singkat Kondisi Awal

- Metadata masih memakai domain lama `dapurkaraeng.com` dan belum memakai canonical production DekatLokal.
- `robots.txt` dan `sitemap.xml` masih mengarah ke domain lama.
- Structured data masih minimal dan belum mencakup LocalBusiness, Product, OfferCatalog, FAQPage, BreadcrumbList, dan WebPage.
- CTA WhatsApp belum konsisten menyebut website DekatLokal.
- Open Graph dan Twitter metadata belum lengkap untuk URL production.
- Produk sudah terlihat di HTML awal, tetapi belum siap optimal untuk Product snippets.
- FAQ terlihat di halaman, tetapi schema FAQ belum tersedia.
- Heading utama sudah memiliki satu H1 dan section utama memakai H2.

## File Yang Diubah

- `index.html`
- `robots.txt`
- `sitemap.xml`
- `SEO_READINESS_REPORT.md`

## Perbaikan Yang Dilakukan

- Title production:
  `Dapur Karaeng | Sambal Sehat Makassar Gowa - DekatLokal`
- Meta description production:
  `Dapur Karaeng Lu'Mu menjual Sambal Karaeng dan jajanan sehat khas Makassar Gowa, fresh tanpa pengawet. Pesan mudah via WhatsApp di DekatLokal.`
- Canonical absolute:
  `https://dapurkaraeng.dekatlokal.com/`
- Robots meta:
  `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- Open Graph dan Twitter metadata sudah memakai URL dan image production.
- `robots.txt` mengizinkan crawling halaman publik dan menunjuk sitemap production.
- `sitemap.xml` berisi homepage canonical production dengan `lastmod` 2026-07-07.
- JSON-LD ditambahkan untuk WebSite, WebPage, FoodEstablishment/LocalBusiness, OfferCatalog, Product, FAQPage, ImageObject, dan BreadcrumbList.
- Alt text gambar penting diperkuat dengan brand, produk, dan lokasi.
- CTA WhatsApp memakai format `wa.me/628124284678` dan pesan otomatis menyebut website DekatLokal.

## Product Snippets Readiness

Produk yang disiapkan di structured data:

- Sambal Karaeng, harga Rp65.000 sampai Rp75.000
- Dimsum Mentai, harga Rp35.000
- Siomay, harga Rp23.000
- Otak-Otak, harga Rp25.000
- Pisang Ijo, harga Rp25.000
- Nasi Liwet Ayam Kampung, harga Rp35.000

Schema memakai `Product`, `Offer`, dan `AggregateOffer` sesuai data harga yang tampil di halaman.

## Merchant Listings Readiness

- Website sudah memiliki nama produk, deskripsi, gambar, harga, brand, dan CTA beli via WhatsApp.
- Merchant listing penuh belum dipaksakan karena checkout tidak selesai di website dan status stok/availability belum tampil eksplisit di halaman.
- Jika ingin memperkuat Merchant listings, tampilkan status stok yang valid, kebijakan pengiriman, kebijakan retur, dan data bisnis yang konsisten.

## Google Search Console SOP Setelah Deploy

1. Buka `https://dapurkaraeng.dekatlokal.com/`.
2. Pastikan homepage aktif dan status 200.
3. Buka `https://dapurkaraeng.dekatlokal.com/robots.txt`.
4. Buka `https://dapurkaraeng.dekatlokal.com/sitemap.xml`.
5. Cek source HTML production.
6. Pastikan title benar.
7. Pastikan meta description benar.
8. Pastikan canonical benar.
9. Pastikan robots meta adalah index follow.
10. Pastikan Open Graph dan Twitter metadata memakai URL production.
11. Pastikan JSON-LD tersedia di source HTML.
12. Tes structured data dengan Rich Results Test.
13. Tambahkan Domain Property `dekatlokal.com` di Google Search Console.
14. Opsional: tambahkan URL-prefix property `https://dapurkaraeng.dekatlokal.com/`.
15. Submit sitemap production.
16. Inspect URL homepage.
17. Jalankan Live Test.
18. Request Indexing jika Live Test valid.
19. Pantau Google-selected canonical dan User-declared canonical.
20. Pantau Page Indexing.
21. Pantau Enhancements.
22. Pantau Product snippets.
23. Pantau Merchant listings jika data memenuhi syarat.
24. Pantau Experience.
25. Pantau Performance setelah data tersedia.

## Page Indexing Monitoring

- URL is on Google: lanjut pantau query, CTR, dan posisi.
- URL is not on Google: jalankan Live Test, submit sitemap, lalu request indexing.
- Discovered currently not indexed: tambah internal link dari domain utama DekatLokal dan submit sitemap ulang.
- Crawled currently not indexed: perkuat konten unik, trust signal, internal link, dan data produk.
- Duplicate without user-selected canonical: audit canonical, sitemap, dan sinyal internal link.
- Google chose different canonical: pastikan semua canonical, sitemap, dan internal link mengarah ke URL production.
- Alternate page with proper canonical: pastikan hanya URL final yang masuk sitemap.
- Blocked by robots.txt: perbaiki robots agar root dan asset publik tidak terblokir.
- Excluded by noindex: hapus noindex di production.
- Page with redirect: submit URL final, bukan URL redirect.
- Not found 404: perbaiki route atau hapus URL dari sitemap.
- Server error 5xx: perbaiki deploy/server sebelum request indexing.

## Performance Monitoring

Pantau di Google Search Console:

- Total clicks
- Total impressions
- Average CTR
- Average position
- Queries
- Pages
- Countries
- Devices
- Search appearance

Tindakan:

- Impression tinggi, CTR rendah: uji title dan meta description baru.
- Query tidak sesuai produk: perkuat heading, copy produk, dan FAQ.
- Posisi rendah: tambah konten berkualitas, internal link, dan trust signal.
- Brand query belum muncul: perkuat nama brand di title, H1, schema, dan konten.
- Local query belum muncul: perkuat lokasi Makassar, Gowa, dan Sulawesi Selatan.

## Internal Linking DekatLokal

Rekomendasi untuk domain utama DekatLokal:

- Tambahkan halaman direktori atau listing UMKM yang menaut ke `https://dapurkaraeng.dekatlokal.com/`.
- Anchor text yang disarankan:
  `Dapur Karaeng Lu'Mu - Sambal Karaeng dan jajanan sehat Makassar Gowa`
- Hindari anchor text generik seperti `klik di sini`.

## Google Business Profile

Jika Dapur Karaeng Lu'Mu memiliki Google Business Profile:

- Tambahkan URL website `https://dapurkaraeng.dekatlokal.com/` pada profil.
- Pastikan NAP konsisten:
  - Name: Dapur Karaeng Lu'Mu
  - Address: Sunu Komp. Unhas Blok P No.25, Makassar
  - Phone: 0812-4284-678
- Gunakan URL Maps yang sama di website dan profil bisnis.

## Risiko Dan Data Yang Belum Bisa Dipastikan

- Status HTTPS dan status 200 production harus diverifikasi setelah deploy Vercel aktif.
- Akses Google Search Console belum tersedia di codebase, jadi submit sitemap dan request indexing harus dilakukan manual.
- Nomor sertifikat halal, NIB, PIRT, BPOM, jam operasional final, dan status stok belum tersedia sebagai data terverifikasi.
- Availability produk tidak dimasukkan ke Product schema karena status stok tidak tampil eksplisit di halaman.
- Merchant listing penuh belum dipaksakan karena transaksi diarahkan ke WhatsApp, bukan checkout website.
- OG image memakai asset existing `logo.jpg`. Untuk performa social sharing terbaik, tim dapat menambahkan image 1200x630 khusus OG tanpa placeholder.
- Beberapa filename gambar masih memakai nama asli dari asset. Tidak diganti agar tidak berisiko memutus referensi existing.

## Checklist Final SEO Readiness

- [x] Canonical production tersedia.
- [x] Robots meta index follow tersedia.
- [x] Open Graph production tersedia.
- [x] Twitter metadata production tersedia.
- [x] JSON-LD tersedia dan memakai URL production.
- [x] Product schema sesuai produk yang tampil.
- [x] FAQ schema sesuai FAQ yang tampil dan aman.
- [x] Breadcrumb schema tersedia.
- [x] Robots.txt menunjuk sitemap production.
- [x] Sitemap.xml memakai URL production.
- [x] CTA WhatsApp memakai format internasional dan pesan DekatLokal.
- [ ] Verifikasi homepage production status 200 setelah deploy.
- [ ] Submit sitemap di Google Search Console.
- [ ] Jalankan URL Inspection dan Request Indexing.
- [ ] Validasi Rich Results Test setelah production online.
