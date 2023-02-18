const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: String,
  studentId: { type: String, unique: true, index: true },
  level: String,
  programme: String,
  hall: String,
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
