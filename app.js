const express = require('express');
const postsRoute = require('./routes/posts');

const app = express();
app.use(express.json());
app.use('/posts', postsRoute);

app.listen(3000);