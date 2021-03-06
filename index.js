const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./models/Grid');
require('./services/passport');


mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/gridRoutes')(app);

if (process.env.NODE_ENV == 'production') {
    //express will serve up production assets
    //like our main.js file or main.css file
    app.use(express.static('client/build'));

    //Express will serve up our index.html 
    //if it does not recognize the route 
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//localhost:5000