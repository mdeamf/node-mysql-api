const Validator = require('fastest-validator');

function validatePost(body) {
  const schema = {
    title: { type: 'string', optional: false, max: 100 },
    content: { type: 'string', optional: false, max: 500 },
    categoryId: { type: 'number', optional: false },
  };

  const v = new Validator();
  const check = v.compile(schema);

  return check(body);
}

module.exports = {
  validatePost,
};
