module.exports = [
  {
    subjects: ['english', 'chinesse'],
    timeslots: [
      {
        days: ['MON', 'TUE'],
        startTime: new Date('1970-01-01T09:00:00+0800'),
        endTime: new Date('1970-01-01T12:00:00+0800'),
      },
      {
        days: ['FRI'],
        startTime: new Date('1970-01-01T14:00:00+0800'),
        endTime: new Date('1970-01-01T16:00:00+0800'),
      },
    ],
  },
  {
    subjects: ['english', 'maths'],
    timeslots: [
      {
        days: ['MON', 'WED'],
        startTime: new Date('1970-01-01T15:00:00+0800'),
        endTime: new Date('1970-01-01T17:00:00+0800'),
      },
      {
        days: ['THU'],
        startTime: new Date('1970-01-01T08:00:00+0800'),
        endTime: new Date('1970-01-01T10:00:00+0800'),
      },
    ],
  },
];

// module.exports = students;
