const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/signup", (req, res) => {
  let arr = [
    { name: "Vishnu", place: "Kuttipuram" },
    { name: "pranav", place: "Tirur" },
    { name: "Vaishnav", place: "Tanur" },
    { name: "anvar", place: "kollam" },
    { name: "Yash", place: "kerala" },
  ];

  res.send(arr);
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.get("/home", (req, res) => {
  res.send("home");
});

app.get("/profile/", (req, res) => {
  let { name, place } = req.query;
  res.send(`profile page of ${name} from ${place}`);
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("Got the request");
});

app.listen(PORT, () => {
  console.log("Start");
});
