# 🎬 iMovies – Movie Ticket Booking System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for booking movie tickets online with real-time seat selection, secure booking, and admin management tools.

---

## 🚀 How to Run the Project (Frontend + Backend)

### 🔧 Prerequisites

Make sure the following are installed:

- *Node.js & npm* → [Download Node.js](https://nodejs.org/)
- *MongoDB* (Local or Atlas) → [Download MongoDB](https://www.mongodb.com/try/download/community)
- *Git* (Optional) → [Install Git](https://git-scm.com/)
- *Firebase account* (For image upload)

---

### 📁 Folder Structure

Movie-Ticket-Booking-System/
├── frontend/ → React + Vite app
├── backend/ → Node.js + Express + MongoDB API


---

### ⚙ Step 1: Backend Setup

```bash
cd backend
npm install
🛠 Create a .env file in backend/:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
▶ Start Backend Server

npm start
The backend will start on: http://localhost:5000

🎨 Step 2: Frontend Setup

cd frontend
npm install
🛠 Create a .env file in frontend/:

VITE_API_URL=http://localhost:5000
▶ Start Frontend Server

npm run dev
The frontend will be available at: http://localhost:5173

📌 Features
🔐 User authentication (JWT)

🎬 Browse movies, shows, theaters

🪑 Real-time seat selection

🧾 Booking management

🛡 Admin dashboard (add/edit/delete)

🔁 Favorite movies

🧮 Pricing by seat section

💾 Firebase storage for movie images

🧱 Tech Stack
Layer	Tech
Frontend	React.js, Vite, Axios, React Router
Backend	Node.js, Express.js, Mongoose, JWT
DB	MongoDB
Storage	Firebase (for images)

🗃 Database Schemas
User (userSchema)

Admin (adminSchema)

Movie (movieSchema)

Theater (theaterSchema)

Show (showSchema)

Booking (bookingSchema)

Favorite (favoriteSchema)


## 👨‍💼 Admin Access & Functionality

The iMovies platform includes a dedicated admin panel that allows administrators to manage movies, theaters, and showtimes.

🔐 Admin Routes in Backend (Example)
Method	Endpoint	Description
POST	/api/admin/register	register as admin
POST	/api/admin/login	Login as admin
POST	/api/admin/addmovie	Add a movie
POST	/api/admin/addshow	Add a showtime

These routes are protected by JWT and require the admin token for access.

👥 Contributors
User Role: Register, browse, book, save favorites

Admin Role: Add movies/shows/theaters, view bookings

📄 License
This project is for educational and personal portfolio use.

🙋‍♂ Developed By
Palle Vinay Reddy

📧 For queries, open issues or contributions are welcome.
