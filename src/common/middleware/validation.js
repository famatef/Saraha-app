export const validation = (schema) => {
  return (req, res, next) => {
    const errResult = [];

    for (const key of Object.keys(schema)) {
      const { error} = schema[key].validate(req[key], {
        abortEarly: false,
      });

      if (error) {
        error.details.forEach((err) => {
          errResult.push({
            message: err.message,
            path: err.path,
            key,
          });
        });
      }

      
    }

    if (errResult.length) {
      return res.status(400).json({ message: "Validation failed", errors: errResult });
    }

    next();
  };
};

