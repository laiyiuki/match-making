const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const timeslot = new Schema({
  days: { type: [String] },
  startTime: { type: Date },
  endTime: { type: Date },
});

const adSchema = new Schema(
  {
    subject: { type: String, require: true },
    timeslots: { type: [timeslot] },
    location: {
      type: { type: String, default: 'Point' },
      coordinates: { type: [] },
    },
  },
  {
    timestamps: true,
  },
);

adSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Ad', adSchema);
