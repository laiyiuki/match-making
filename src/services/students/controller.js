const mongoose = require('mongoose');
const Student = require('./model');

module.exports = {
  create,
  getAll,
  get,
};

async function create(req, res) {
  const student = new Student({
    subjects: req.body.subjects,
    timeslots: req.body.timeslots,
  });

  await student.save();
  res.send({ student: student });
}

async function getAll(req, res) {
  const students = await Student.find();
  res.send({ students });
}

async function get(req, res) {
  const student = await Student.findOne({ _id: req.params.id });
  res.send({ student });
}
