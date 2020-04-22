const express = require('express');
const session = require('express-session');
const app = express();
const secret = 'xyz12345';
const myRouter = require('./makeMyRouter');
app.use(
  session({
    cookie: {
      secure: false, path: '/', maxAge: 60000, httpOnly: true, domain: 'localhost',
    },
    secret: secret,
    resave: false,
    name: 'my-cookie',
    proxy: true,
    saveUninitialized: true
  }),
);
app.use("/base", myRouter);
app.use("/", (req, res, next) => res.send(`in session ${JSON.stringify(req.session || {}, null, 2)}`));

app.listen(3000, () => console.log('started'));
