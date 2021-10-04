const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');

router.post('/', postsController.save);
router.get('/:id', postsController.show);
router.get('/', postsController.showAll);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.destroy);

module.exports = router;