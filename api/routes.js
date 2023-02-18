const { Router } = require("express");
const studentRouter = require("../students/student.routes");

const appRouter = new Router();

appRouter.get("/", function (req, res) {
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.json({
    message: "Welcome to the student portal!",
  });
});

appRouter.use("/students", studentRouter);

module.exports = appRouter;
