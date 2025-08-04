const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/posts.js");
const session = require("express-session");

app.use(
  session({
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/count", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send(`You sent request ${req.session.count} times`);
});

// app.get("/test", (req, res) => {
//   res.send("test successful!");
// });

app.listen(3000, () => {
  console.log("server listening to 3000");
});
