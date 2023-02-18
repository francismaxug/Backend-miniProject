const { Router } = require("express");
const {
  getStudents,
  findStudent,
  createStudent,
} = require("./student.controller");
const validateResource = require("../util/validator");
const { createStudentSchema } = require("./student.schema");

const studentRouter = new Router();

studentRouter.get("/all", getStudents);
studentRouter.get("/:studentId", findStudent);

studentRouter.post("/", validateResource(createStudentSchema), createStudent);

module.exports = studentRouter;
