const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');
const { validatePost } = require('../schema/post.schema');

router.post('/', validatePost, postsController.save);
router.get('/:id', postsController.show);
router.get('/', postsController.showAll);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.destroy);

module.exports = router;