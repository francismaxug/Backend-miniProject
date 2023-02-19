const Student = require("./student.model");

async function getStudents(req, res, next) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    next(error);
  }
}

async function findStudent(req, res, next) {
  try {
    const { studentId } = req.params;
    const student = await Student.findOne({ studentId }).exec();
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    next(error);
  }
}

async function createStudent(req, res, next) {
  try {
    const data = req.body;
    const exist = await Student.findOne({ studentId:data.studentId }).exec();
    if(exist){
      return res.status(400).json({message:"Student with id already exist"})
    }

    let newStudent = new Student(data);
    const saved = await newStudent.save();
    res.json({ message: "Student created" ,studentId:saved.studentId});
  } catch (error) {
    next(error);
  }
}

module.exports = { getStudents, findStudent, createStudent };
