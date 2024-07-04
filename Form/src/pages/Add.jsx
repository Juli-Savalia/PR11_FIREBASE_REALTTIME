import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { AddUser } from "../redux/actions/FormAction";
const Add = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [company, setCompany] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (h) => {
    h.preventDefault();
    // console.log(name, mail, company, tel, address);
    const data = {
      id: Date.now(),
      name,
      mail,
      company,
      tel,
      address,
    };
    alert("Data inserted Successfully..!!");
    dispatch(AddUser(data));
    // console.log(data);
    setName("");
    setAddress("");
    setCompany("");
    setTel("");
    setMail("");
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center text-danger fw-bold p-3">Form</h2>
        <div className="col-10 p-5 bg-white shadow d-flex flex-wrap mx-auto">
          <div className="col-3">
            <div className="bg-danger" style={{ height: "450px" }}>
              <h3 className="text-center text-white fw-bold fs-5 py-5 m-0">
                Submit Your Details
              </h3>
              <ul className="list-unstyled m-0 px-4">
                <li className="text-white py-3">
                  <FaLocationDot></FaLocationDot> Address
                </li>
                <li className="text-white py-3">
                  <IoIosContacts></IoIosContacts> Contact
                </li>
                <li className="text-white py-3">
                  <CiMail></CiMail> Mail
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 px-5">
            <h4 className="fw-bold py-3">Email Us</h4>
            <form
              onSubmit={handleSubmit}
              className="w-100 d-flex flex-wrap justify-content-between"
            >
              <div className="col-5">
                Name :
                <input
                  type="text"
                  className="border border-danger border-1 my-3 py-2 w-100"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                Email Address :
                <input
                  type="mail"
                  className="border border-danger border-1 mt-3 py-2 w-100"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                />
              </div>
              <div className="col-4">
                Company :
                <input
                  type="text"
                  className="border border-danger border-1 my-3 py-2 w-100"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
                Contact :
                <input
                  type="tel"
                  className="border border-danger border-1 mt-3 py-2 w-100"
                  onChange={(e) => setTel(e.target.value)}
                  value={tel}
                />
              </div>
              <textarea
                placeholder="Message"
                className="mt-4 border border-danger w-100"
                rows={4}
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              ></textarea>
              <button className="w-100 text-white bg-danger border-0 mt-4 py-3">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
