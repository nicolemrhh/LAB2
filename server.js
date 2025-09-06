const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes"); // ✅ match exact filename

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Mount routes
app.use("/api/students", studentRoutes);
console.log("✅ Student route mounted");

app.use("/api/courses", courseRoutes);
console.log("✅ Course route mounted");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/api`);
});
