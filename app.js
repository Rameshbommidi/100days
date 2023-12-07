//
const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

module.exports = app;

app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
});

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();

let dateOfter100Days = addDays(new Date(year, month, date), 100);

// var result = format(
//   new Date(
//     dateOfter100Days.getFullYear(),
//     dateOfter100Days.getMonth(),
//     dateOfter100Days.getDate()
//   ),
//   "MM/dd/yyyy"
// );

const result = `${dateOfter100Days.getDate()}/${
  dateOfter100Days.getMonth() + 1
}/${dateOfter100Days.getFullYear()}`;

app.get("/", (req, res) => {
  res.send(result);
});
