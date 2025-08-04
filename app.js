const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/posts.js");
const session = require("express-session");

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  console.log(req.session);
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`hello ${req.session.name}`);
});

app.listen(3000, () => {
  console.log("server listening to 3000");
});
