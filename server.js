const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/users');
const profile = require('./routes/wineView');
const wine = require('./routes/wine');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('Cloud also Started Drinking wine'))
  .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/wine', wine);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Wine is being served at ${port}`));
