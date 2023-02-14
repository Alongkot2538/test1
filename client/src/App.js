import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState(0);
  const [address, setAddress] = useState("");
  const [cardid, setCardid] = useState("");
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(0);
  const [customerid, setCustomerid] = useState(0);
    const [customerList, setCustomerList] = useState([]);

  const getCustomer = () => {
    Axios.get("http://localhost:3001/customer").then((response) => {
      setCustomerList(response.data);
    });
  };

  const addCustomer = () => {
    Axios.post("http://localhost:3001/create", {
      firstname: "firstname",
      lastname: "lastname",
      address: "address",
      cardid: "cardid",
      gender: "gender",
      date: "date",
      customerid: "customerid",

    }).then(() => {
      setCustomerList([
        ...customerList,
        {
          firstname: firstname,
          lastname: lastname,
          address: address,
          cardid: cardid,
          gender: gender,
          date: date,
          customerid: customerid,
        },
      ]);
    });
  };

  

  const deleteCustomer = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setCustomerList(
        customerList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App container">
      <h1> Infomation</h1>
      <div className="information">
        <form action="">

          <div className="mb-3">
            <label className="form-label" htmlFor="Firstname">
            FirstName:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Firstname"
              onChange={(event) => {
                setFirstname(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Lastname">LastName:</label>
           
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              onChange={(event) => {
                setLastname(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Address">Address:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              onChange={(event) => {
                setAddress(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Card ID">Card ID:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Card ID"
              onChange={(event) => {
                setCardid(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Gender">Gender:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              onChange={(event) => {
                setGender(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Date">Date:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Date"
              onChange={(event) => {
                setDate(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="customer id">customer id:</label>
            <input
              type="text"
              className="form-control"
              placeholder="customer id"
              onChange={(event) => {
                setCustomerid(event.target.value)
              }}
            />
          </div>

          

          <button onClick={addCustomer} class="btn btn-success">
            Add Customer
          </button>

        </form>
      </div>
      <hr />
      <div className="customer">
        <button class="btn btn-primary" onClick={getCustomer}>
          Show Customer
        </button>
        <br />
        <br />
        {customerList.map((val, key) => {
          return (
            <div className="customer card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.cs_firstname}</p>
                <p className="card-text">LastName: {val.cs_lastname}</p>
                <p className="card-text">Address: {val.cs_address}</p>
                <p className="card-text">Card ID: {val.cs_cardid}</p>
                <p className="card-text">Gender: {val.cs_gender}</p>
                <p className="card-text">Date: {val.cs_date}</p>
                <p className="card-text">customer id: {val.cs_id}</p>
                <div className="d-flex">
                  
                  <button className="btn btn-danger" onClick={() => {deleteCustomer(val.id)}}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
