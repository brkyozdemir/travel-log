const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
    type: String,
    required: true
};

const logEntrySchema = new Schema({
    title: requiredString,
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    image: String,
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    visitDate: {
        required: true,
        type: Date
    },
}, {
    timestamps: true
})

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;