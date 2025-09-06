// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/courseController");

// CRUD routes
router.get("/", ctrl.getCourses);
router.get("/:id", ctrl.getCourseById);
router.post("/", ctrl.createCourse);
router.put("/:id", ctrl.updateCourse);
router.delete("/:id", ctrl.deleteCourse);

module.exports = router;

