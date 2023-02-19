const yup = require("yup");

const createStudentSchema = yup.object({
  name: yup.string().required(),
  studentId: yup.string().required(),
  level: yup
    .string()
    .oneOf(["100", "200", "300", "400", "500", "600"])
    .required(),
  programme: yup.string().required(),
  hall: yup.string().optional().required()
});

module.exports = { createStudentSchema };
