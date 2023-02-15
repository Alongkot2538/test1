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
  const id = req.body.id;

  // const values = [firstname, lastname, address, cardid, gender,date,id];
 
  db.query(
    // "INSERT INTO customer (cs_firstname, cs_lastname,cs_address,cs_address, cs_cardid, cs_gender, cs_date, cs_id )  VALUES (?,?,?,?,?,?,?) ",
    `"INSERT INTO customer (cs_firstname = '${firstname}', 
  cs_lastname ='${lastname}', cs_ddress =${address} , 
  cs_cardid ='${cardid}', cs_gender ='${gender}', cs_date ='${date}', cs_id ='${id}')   VALUES (?)`,
    [firstname, lastname, address, cardid, gender,date,id],
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

// app.post('/create', (req, res)=> {
//   let sql = `"INSERT INTO customer (cs_firstname = '${firstname}', 
//   cs_lastname ='${lastname}', cs_ddress =${address} , 
//   cs_cardid ='${cardid}', cs_gender ='${gender}', cs_date ='${date}', cs_id ='${id}')   VALUES (?)`;
//   let values = [
//     req.body.firstname,
//     req.body.lastname,
//     req.body.address,
//     req.body.cardid,
//     req.body.gender,
//     req.body.date,
//     req.body.id,
//   ];
//   con.query(sql, [values], (err, data, fields)=> {
//     if (err) throw err;
//     res.json({message: "New user added successfully"})
//   })
// })


app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const cardid = req.body.cardid;
  const gender = req.body.gender;
  const date = req.body.date;

  // let sql = 
  // `UPDATE user SET cs_firstname = '${firstname}', 
  // cs_lastname ='${lastname}', cs_ddress =${address} , 
  // cs_cardid ='${cardid}', cs_gender ='${gender}', cs_date ='${date}'
  // WHERE ID = ${id}`;

  // con.query(sql, (err, data, fields)=> {
  //   if (err) throw err;
  //   res.json({message: "Update user successfully"})
  // })

  db.query(
    "UPDATE customer SET customer = ? WHERE id = ?",
    [firstname,lastname,address,cardid,gender,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
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
