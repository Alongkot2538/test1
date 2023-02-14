const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "test",
});

app.get("/customer", (req, res) => {
    db.query("SELECT * FROM customer", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.post("/create", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const cardid = req.body.cardid;
  const gender = req.body.gender;
  const date = req.body.date;
  const customerid = req.body.id;

  const values = [firstname, lastname, address, cardid, gender,date,customerid];
 
  db.query(
    "INSERT INTO customer (cs_firstname, cs_lastname,cs_address,cs_address, cs_cardid, cs_gender, cs_date, cs_id )  VALUES (?,?,?,?,?,?,?) ",
    // [firstname, lastname, address, cardid, gender,date,customerid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(firstname);
        res.send("Values Inserted");
      }
    }
  );
});



app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM customer WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});
