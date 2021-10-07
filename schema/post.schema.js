const Validator = require('fastest-validator');

function validatePost(req, res, next) {
  const schema = {
    title: { type: 'string', optional: false, max: 100 },
    content: { type: 'string', optional: false, max: 500 },
    category_id: { type: 'number', optional: false },
  };

  const v = new Validator();
  const check = v.compile(schema);

  const validation = check(req.body);
  if (validation !== true) {
    res.status(400).json({
      message: 'Unexpected format!',
      error: validation,
    });
  } else {
    return next();
  }
}

module.exports = {
  validatePost,
};
