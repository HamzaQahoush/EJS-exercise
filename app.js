const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let users = [];

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "add User",
  });
});

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "users",
    users: users,
  });
});

app.post("/add-user", (req, res, next) => {
  users.push({
    name: req.body.username,
  });
  res.redirect("/users");
});

app.listen(3000);

