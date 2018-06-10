const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const timeslot = new Schema({
  days: { type: [String] },
  startTime: { type: Date },
  endTime: { type: Date },
});

const studentSchema = new Schema(
  {
    subjects: { type: [String] },
    timeslots: { type: [timeslot] },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Student', studentSchema);
