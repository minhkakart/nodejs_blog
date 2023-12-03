const express = require("express");
const path = require("path");
const morgan = require("morgan");
const engine = require("express-handlebars").engine;

const route = require("./routes");

const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("dev "));
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "src/resources/views");

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
