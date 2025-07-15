import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ ADD THIS
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// ✅ ENABLE CORS — this must come BEFORE your routes
app.use(cors({
  origin: "https://frontend-lud5.onrender.com", // your frontend domain
  credentials: true, // optional: only if you're using cookies or authorization headers
}));

app.use(express.json());

app.use("/api/users", authRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
