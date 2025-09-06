// controllers/courseController.js
const db = require("../config/db");

// ✅ Get all courses
exports.getCourses = (req, res) => {
  db.query("SELECT * FROM courses", (err, results) => {
    if (err) {
      console.error("Error fetching courses:", err);
      return res.status(500).json({ error: "Database error" });
    }

    // 👇 temporary test message
    res.json({ debug: "getCourses reached", data: results });
  });
};

// ✅ Get course by ID
exports.getCourseById = (req, res) => {
  console.log("📥 GET /api/courses called");  // 👈 add this

  const { id } = req.params;
  db.query("SELECT * FROM courses WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching course:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(results[0]);
  });
};

// ✅ Create new course
exports.createCourse = (req, res) => {
  const { code, title, units } = req.body;
  if (!code || !title || !units) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "INSERT INTO courses (code, title, units) VALUES (?, ?, ?)",
    [code, title, units],
    (err, results) => {
      if (err) {
        console.error("Error inserting course:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ id: results.insertId, code, title, units });
    }
  );
};

// ✅ Update course
exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const { code, title, units } = req.body;

  db.query(
    "UPDATE courses SET code = ?, title = ?, units = ? WHERE id = ?",
    [code, title, units, id],
    (err, results) => {
      if (err) {
        console.error("Error updating course:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json({ id, code, title, units });
    }
  );
};

// ✅ Delete course
exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM courses WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error deleting course:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  });
};
