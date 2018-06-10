const { Student } = require('../services/students');
const { Ad } = require('../services/ads');

const students = require('./students');
const ads = require('./ads');

async function seed(req, res) {
  try {
    await Student.remove();
    await Ad.remove();

    for (student of students) {
      const newStudent = new Student(student);
      newStudent.save();
    }

    for (ad of ads) {
      const newAd = new Ad(ad);
      newAd.save();
    }

    res.send({ status: 'success', message: 'Seeding database succeeded' });
  } catch (err) {
    res.send({ status: 'error', message: err });
  }
}

module.exports = seed;
