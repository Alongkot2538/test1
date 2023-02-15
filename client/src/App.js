import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState(0);
  const [address, setAddress] = useState("");
  const [cardid, setCardid] = useState("");
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(0);
  const [id, setId] = useState(0);
    const [customerList, setCustomerList] = useState([]);
    const [newFirstname, setNewFirstname] = useState(0);
    const [newLastname, setNewLastname] = useState(0);
    const [newAddress, setNewAddress] = useState(0);
    const [newCardid, setNewCardid] = useState(0);
    const [newGender, setNewGenger ] = useState(0);
    const [newDate, setNewDate ] = useState(0);


  const getCustomer = () => {
    Axios.get("http://localhost:3001/customer").then((response) => {
      setCustomerList(response.data);
    });
  };

  const addCustomer = () => {
    Axios.post("http://localhost:3000/create", {
      firstname: "firstname",
      lastname: "lastname",
      address: "address",
      cardid: "cardid",
      gender: "gender",
      date: "date",
      id: "id",

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
          id: id,
        },
      ]);
    });
  };

  const updateCustomer = (id) => {
    Axios.put("http://localhost:3001/update", { firstname: newFirstname, lastname: newLastname,address: newAddress,cardid: newCardid,gender: newGender,date: newDate, id: id }).then(
      (response) => {
        setCustomerList(
          customerList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  firstname: val.newFirstname,
                  lastname: val.newLastname,
                  address: val.newAddress,
                  cardid: val.newCardid,
                  gender: val.newGender,
                  date: val.newDate,
          
                }
              : val;
          })
        );
      }
    );
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
            <label className="form-label" htmlFor="firstname">
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
            <label htmlFor="lastname">LastName:</label>
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
            <label htmlFor="address">Address:</label>
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
            <label htmlFor="cardid">Card ID:</label>
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
            <label htmlFor="gender">Gender:</label>
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
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Date"
              onChange={(event) => {
                setDate(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="id">customer id:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Customer id"
              onChange={(event) => {
                setId(event.target.value)
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
                <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="firstname."
                    onChange={(event) => {
                      setNewFirstname(event.target.value)
                    }}
                  />
                  
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="Lastname"
                    onChange={(event) => {
                      setNewLastname(event.target.value)
                    }}
                  />
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="Address"
                    onChange={(event) => {
                      setNewAddress(event.target.value)
                    }}
                  />
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="Card id"
                    onChange={(event) => {
                      setNewCardid(event.target.value)
                    }}
                  />
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="text"
                    placeholder="Gender."
                    onChange={(event) => {
                      setNewGenger(event.target.value)
                    }}
                  />
                  <input
                    className="form-control"
                    style={{ width: "300px" }}
                    type="date"
                    placeholder="Date."
                    onChange={(event) => {
                      setNewDate(event.target.value)
                    }}
                  />
          
                  <button className="btn btn-warning" onClick={() => {updateCustomer(val.id)}}>Update</button>
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
