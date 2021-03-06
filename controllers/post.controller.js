const models = require('../models');

function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
    user_id: 1,
  };

  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: error,
      });
    });
}

function show(req, res) {
  const id = req.params.id;

  models.Post.findByPk(id)
    .then((result) => {
      if (!result) {
        throw 'Post not found!';
      }
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: error,
      });
    });
}

function showAll(req, res) {
  models.Post.findAll()
    .then((result) => {
      if (!result.length) {
        throw 'No posts found!';
      }
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: error,
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedPost = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
  };

  models.Post.update(updatedPost, {
    where: {
      id: id,
    },
  })
    .then((result) => {
      if (!result) {
        throw 'Post not found!';
      }

      res.status(200).json({
        message: 'Post updated successfully!',
        post: updatedPost,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: error,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.Post.destroy({
    where: {
      id: id,
    },
  })
    .then((result) => {
      if (!result) {
        throw 'Post not found!';
      }

      res.status(200).json({
        message: 'Post deleted successfully!',
        post: {
          id,
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: error,
      });
    });
}

module.exports = {
  save,
  show,
  showAll,
  update,
  destroy,
};
