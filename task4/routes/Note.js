// Packages
const express = require("express");

// Injections
const router = express.Router();

// Controllers
const Note_Controller = require("../controllers/Note");

// Routes
router.get("/allNotes", Note_Controller.GetNotes)

router.post("/updateNote", Note_Controller.UpdateNote)

router.post("/addNote", Note_Controller.AddNote)

router.delete("/deleteNote", Note_Controller.DeleteNote)

// Export
module.exports = router;