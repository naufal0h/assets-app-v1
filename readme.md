📦 Asset Income App — v1

Asset Income App adalah aplikasi full-stack untuk mengelola:

Asset

Invoice

Pembayaran (dengan upload bukti)

Approval pembayaran (admin)

Project ini dibuat sebagai portfolio / learning project menggunakan stack modern.

🚀 Tech Stack
Backend

Node.js

Express

Prisma ORM

SQLite

JWT Authentication

Multer (file upload)

Frontend

Next.js (App Router)

React

Axios

CSS (custom, no UI framework)

✨ Features (v1)
🔐 Authentication

Register & Login

JWT-based auth

🏢 Assets

Create asset

List assets

🧾 Invoices

Create invoice

List invoices

Asset selection via dropdown

💳 Payments

Upload payment proof (image)

View uploaded proof

Payment status flow:

waiting

verifying

approved

👮 Admin

Approve payment from UI

📁 Project Structure
asset-income-app/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.ts
│   └── package.json
│
├── frontend/
│   ├── app/
│   │   ├── assets/
│   │   ├── invoices/
│   │   ├── login/
│   │   └── page.tsx
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone repository
git clone https://github.com/naufal0h/assets-app-v1.git
cd asset-income-app

2️⃣ Backend setup
cd backend
npm install


Create .env file:

DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secret_key"


Run Prisma:

npx prisma db push


Start backend:

npm run dev


Backend runs at:

http://localhost:4000

3️⃣ Frontend setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🧪 Usage Flow

Register user via API

Login from frontend

Create assets

Create invoices

Upload payment proof

Approve payment (admin)

🧠 Learning Outcomes

This project demonstrates:

Full-stack architecture

REST API design

Auth & protected routes

Prisma schema ↔ database sync

File upload handling

Frontend ↔ backend integration

Error handling (400 / 401 / 404 / 500)

🛠 Future Improvements (v2+)

Role-based access (admin/user)

Better UI & UX

Pagination & search

Deploy to production

Replace SQLite with PostgreSQL

Asset price auto-fill in invoice

📄 License

This project is for learning & portfolio purposes.

👤 Author

Built by [naufal]
GitHub: https://github.com/naufal0h