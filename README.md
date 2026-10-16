# ShipKit Lite — Free Next.js 15 SaaS Starter Kit ⚡

> **The clean, modern SaaS foundation for indie hackers and solo developers.**

ShipKit Lite provides the essential architecture you need to launch a modern web application: Next.js 15 App Router, React 19, Tailwind CSS, and Supabase SSR authentication with Row Level Security.

---

## 🚀 Features

- ✅ **Next.js 15 App Router:** Server components, server actions, and route handlers.
- ✅ **TypeScript Strict Mode:** Fully type-safe across all components.
- ✅ **Supabase Auth (SSR):** Cookie-based session storage, OAuth (Google), and Email magic links.
- ✅ **PostgreSQL Database:** Automatic profile generation trigger on user registration.
- ✅ **SaaS Dashboard Layout:** Responsive sidebar, navigation, and user profile management.
- ✅ **Clean Developer Theme:** High-contrast dark zinc aesthetic with zero generic gradients.

---

## ⚡ Need Payments, Stripe Subscriptions & Webhooks?

ShipKit Lite is intentionally kept lean. If you want to accept recurring subscriptions, handle automated plan upgrades, and deploy to production immediately, upgrade to **ShipKit Pro ($29)**:

👉 **[Get ShipKit Pro on Gumroad ($29)](https://apollosolal.gumroad.com/l/shipkit-pro)**

### What is included in ShipKit Pro ($29)?
- 💳 **Complete Stripe Subscriptions:** Pre-built Checkout Sessions and Customer Billing Portal.
- ⚡ **Automated Webhooks:** Zero-latency synchronization between Stripe events (`customer.subscription.*`) and Supabase PostgreSQL.
- ✉️ **Transactional Emails:** Integrated Resend email templates for welcome emails and billing alerts.
- 🐳 **Production Docker:** Multi-stage `Dockerfile` and `docker-compose.yml` for self-hosting.
- 🚀 **GitHub Actions CI/CD:** Automated linting, type-checking, and build verification.
- 📖 **Comprehensive Setup Guide:** Step-by-step PDF manual from local dev to production domain.

---

## 🛠️ Quick Start (ShipKit Lite)

### 1. Clone & Install
```bash
git clone https://github.com/JohnApollos/shipkit-lite.git
cd shipkit-lite
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Supabase credentials from [supabase.com](https://supabase.com):
```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

### 3. Run Database Migrations
Copy and run the SQL file in your Supabase SQL Editor:
```
supabase/migrations/20261015000000_init_schema.sql
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your application.

---

## 📄 License
MIT License. Free to use for personal and commercial projects.
For the full commercial SaaS boilerplate with Stripe billing, see [ShipKit Pro](https://apollosolal.gumroad.com/l/shipkit-pro).
