const express = require("express");
const app = express();
const hb = require("express-handlebars");
const ca = require("chalk-animation");

app.engine("handlebars", hb());

app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.get("/", (req, res) => {
  res.render("home", {
    layout: "main"
  });
});

app.listen(process.env.PORT || 8080, () =>
  ca.rainbow("listening on port 8080")
);
