import axios from "axios";
import React, { useState, useEffect } from "react"; //rafce
import { Link, useParams } from "react-router-dom";
const EmpDetail = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { empId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/employee/" + empId)
      .then((res) => {
        console.log(res.data);
        setId(res.data.id);
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container">
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h3> Employee Detail</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <h3>
                      The Employee name is :<b>{name}</b>({id})
                    </h3>
                  </div>
                </div>
                <h5>Contact Details</h5>
                <div className="col-lg-12">
                  <div className="form-group">
                    <h6>Email is :{email} </h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <h6>Phone is : {phone}</h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    {" "}
                    <Link to="/" className="btn btn-danger">
                      Back to Listing
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpDetail;
