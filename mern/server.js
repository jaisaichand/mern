
const express = require('express');

const mongoose = require('mongoose');

const app = express();

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const db = require('./config/keys').mongoURI;

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

mongoose.connect(db)
    .then(() => { console.log('Mongo db connected') })
    .catch(err => console.log(err));

app.get('/', (req, res) => { res.send('hello world') });

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`server running on port ${port}`) });