const Ad = require('./model');
const { Student } = require('../students');

module.exports = {
  create,
  getAll,
  get,
  getAdsMatchWithStudent,
  // getAdsMatchWithStudentAndLocation,
  getAdsMatch,
};

async function create(req, res) {
  const { subject, timeslots, longitude, latitude } = req.body;
  const ad = new Ad({
    subject,
    timeslots,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude],
    },
  });

  await ad.save();
  res.send({ ad });
}

async function getAll(req, res) {
  const ads = await Ad.find();
  res.send({ ads });
}

async function get(req, res) {
  const ad = await Ad.findOne({ _id: req.params.id });
  res.send({ ad });
}

async function getAdsMatchWithStudent(req, res) {
  const { studentId } = req.params;

  const { subjects, timeslots } = await Student.findOne({ _id: studentId });
  const result = await Ad.find({
    subject: { $in: subjects },
  });

  res.send({ result: result });
}

// async function getAdsMatchWithStudentAndLocation(req, res) {
//   const { longitude, latitude, distance, studentId } = req.params;
//
//   const { subjects, timeslots } = await Student.findOne({ _id: studentId });
//   const result = await Ad.find({
//     subject: { $in: subjects },
//     location: {
//       $near: {
//         $geometry: {
//           type: 'Point',
//           coordinates: [parseFloat(longitude), parseFloat(latitude)],
//         },
//         $minDistance: 0,
//         $maxDistance: parseFloat(distance) * 1000,
//       },
//     },
//   });
//
//   res.send({ result: result });
// }

async function getAdsMatch(req, res) {
  try {
    const { longitude, latitude, distance, studentId } = req.query;

    const student = await Student.findOne({ _id: studentId });
    if (!student) {
      res.send({ status: 'success', message: 'Student not found' });
      return;
    }

    const { subjects, timeslots } = student;
    let query;
    if (longitude && latitude && distance) {
      query = {
        subject: { $in: subjects },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(longitude), parseFloat(latitude)],
            },
            $minDistance: 0,
            $maxDistance: parseFloat(distance) * 1000,
          },
        },
      };
    } else {
      query = {
        subject: { $in: subjects },
      };
    }

    const result = await Ad.find(query);

    res.send({ result: result });
  } catch (err) {
    res.send({ status: 'error', message: err });
  }
}
