// Packages
const express = require("express");

// Callings
const router = express.Router(); // define routes for the /admin URL path.

// Controllers
const User_Controller = require("../controllers/User");

// Middlewares
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");

// Routes
router.post("/signup", User_Controller.Signup)
router.post("/login", User_Controller.Login)
router.delete("/deleteUsers", checkAuth, checkAdmin, User_Controller.DeleteUsers)
// Export
module.exports = router;