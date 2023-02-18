const validateResource = (resourceSchema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await resourceSchema.validate(resource, { abortEarly: false });
    next();
  } catch (e) {
    console.error(e);
    res.status(422).json({ errors: e.errors });
  }
};

module.exports = validateResource;
