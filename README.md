# Sahro

O‘zbek restoraniga mo‘ljallangan zamonaviy, moslashuvchan veb-sayt. Loyiha Next.js App Router, React, TypeScript va Tailwind CSS bilan yaratilgan.

## Imkoniyatlar

- Restoran, taomlar va ish vaqti haqida bosh sahifa
- Kategoriyalar bo‘yicha filtrlanuvchi taomlar menyusi
- Restoran tarixi va stol band qilish bo‘limi
- Mobil, planshet va kompyuter ekranlariga mos dizayn
- O‘zbek tilidagi sahifa metama’lumotlari va Open Graph
- GitHub Actions CI: lint, TypeScript tur tekshiruvi va production build

> **Demo eslatmasi:** bron formasi hozircha backendga ulanmagan; kiritilgan ma’lumot saqlanmaydi. Ishga tushirishdan oldin restoran nomi, menyu, kontakt ma’lumotlari va tashqi rasmlarni o‘zingiznikiga almashtiring.

## Ishga tushirish

Talablar: Node.js 22 yoki undan yangisi va npm.

```bash
npm ci
npm run dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) manzilini oching.

## Tekshiruvlar

```bash
npm run lint
npm run typecheck
npm run build
```

## GitHub’ga joylash

1. GitHub’da yangi, bo‘sh repository yarating.
2. Loyiha papkasida quyidagi buyruqlarni bajaring:

```bash
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git
git push -u origin main
```

Pull request ochilganda `.github/workflows/ci.yml` avtomatik ravishda lint, typecheck va production build tekshiruvlarini bajaradi.

## Loyiha tuzilishi

```text
src/app/
  globals.css   # Dizayn va moslashuvchan stillar
  layout.tsx    # Umumiy HTML layout va SEO metadata
  page.tsx      # Restoran bosh sahifasi va interaktiv menyu
.github/
  workflows/ci.yml
```

## Keyingi qadamlar

- Bron so‘rovlarini saqlash uchun API yoki backend xizmatini ulash.
- `src/app/page.tsx` dagi namunaviy taomlar, narxlar va rasmlarni restoran ma’lumotlari bilan almashtirish.
- Mahalliy rasmlar, haqiqiy manzil va aloqa ma’lumotlarini qo‘shish.
