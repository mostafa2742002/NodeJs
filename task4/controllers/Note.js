/*
 * This Controller includes the Note Router Handlers and Business Logic
 * Here is the Note GetNotes Controller
 * Here is the Note AddNote Controller
 * Here is the Note DeleteNote Controller
*/

// Models
const Note = require('../models/Note');

// Utils
const sendResponse = require('../utils/sendResponse');

// Methods
const GetNotes = async (req, res) => {
    try {
        const notes = await Note.find({ });
        return sendResponse(res, 200, "Notes are retreived", notes);
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const UpdateNote = async (req, res) => {
    try {
        const _id = req.body._id;
        const data = req.body;
        await Note.findByIdAndUpdate({ _id: _id }, data);
        return sendResponse(res, 200, "The Note is updated successfully");
        
    } catch (err) {
        return sendResponse(res, 500, err.message);
    }
}
const AddNote = async (req, res) => {
    try {
        const data = req.body;
        const note = await new Note(data).save();
        return sendResponse(res, 200, "Note is saved successfully", note);
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const DeleteNote = async (req, res) => {
    try {
        const _id = req.body._id;
        await Note.findByIdAndDelete({ _id: _id });
        return sendResponse(res, 200, "The Note is deleted successfully");
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}

// Export 
module.exports = {
    GetNotes,
    UpdateNote,
    AddNote,
    DeleteNote,
}

