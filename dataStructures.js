var thing =
{
  UID: {
    courses: [{
      name: String,
      classes: [{
        className: String,
        students: [{ref: 'student'}],
        assignments: [{
          masterAssignmentRef: {ref: 'masterAssignment'},
          date: Date,
          studentScores: [{
            studentRef: {ref: 'student'},
            score: Number
          }]
        }]
      }],
      masterAssignments: masterAssignment
    }]
  }
};

var student = {
  name: String,
  phoneNumber: Number,
}

var masterAssignment = {
  name: String,
  type: String,
  tags: [String]
}