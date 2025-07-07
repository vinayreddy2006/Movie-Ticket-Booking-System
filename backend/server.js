const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const showRoutes = require("./routes/showRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const movieRoutes = require("./routes/movieRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
require("dotenv").config({ path: "./.env" });


const crypto = require("crypto")

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});

app.use("/api/auth", authRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/theatre", theatreRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/favorite", favoriteRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth/admin", adminRoutes);
app.use("/api/review", reviewRoutes);



app.use(bodyParser.json());



const mongoUri = process.env.MONGODB_CONNECTION_LINK;

if (!mongoUri) {
  console.error('MONGODB_CONNECTION_LINK is not defined in the environment variables');
  process.exit(1);
}

const connectToMongo = async () => {
try {
  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB Successfully");
} catch (error) {
  console.error("Error connecting to MongoDB", error.message);
}
};

connectToMongo();