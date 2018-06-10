const { Router } = require('express');
const { StudentCtrl } = require('../services/students');
const { AdCtrl } = require('../services/ads');

const router = new Router();

// student routes
router.post('/students', StudentCtrl.create);
router.get('/students', StudentCtrl.getAll);
router.get('/students/:id', StudentCtrl.get);

// ads routes
router.post('/ads', AdCtrl.create);
router.get('/ads', AdCtrl.getAll);
router.get('/ads/search', AdCtrl.getAdsMatch);
router.get('/ads/:id', AdCtrl.get);
router.get('/ads/student/:studentId', AdCtrl.getAdsMatchWithStudent);
// router.get(
//   '/ads/student/:studentId/:longitude/:latitude/:distance',
//   AdCtrl.getAdsMatchWithStudentAndLocation,
// );

module.exports = router;
