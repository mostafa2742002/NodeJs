const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Review = mongoose.model('Note', reviewSchema);

module.exports = Review;
