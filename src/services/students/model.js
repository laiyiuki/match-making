const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const studentSchema = new Schema(
  {
    subjects: { type: [String] },
    timeslots: { type: [Number] },
    // e.g. [1, 2, 3] each number represent 1 hour slot, min: 1 = MON 00:00-01:00, max: 168 = SUN 23:00-00:00
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Student', studentSchema);
