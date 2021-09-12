import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Addtodo = () => {
  const history = useHistory();
  const [postUser, setpostuser] = useState({
    id: "",
    title: "",
    dsc: "",
    status: "open",
    createDate: new Date().toLocaleString("en-IN"), //storing all input data for send to DB
    updateDate: new Date().toLocaleString("en-IN"),
  });
  const setDataFun = (e) => {
    setpostuser({ ...postUser, [e.target.name]: e.target.value });
  };
  // ----------start-----send data in data base------------------------------
  const SendUserdata = async (e) => {
    await axios
      .post("http://localhost:3003/users", postUser) //postUser means a location which data you want to send in DB

      .catch((error) => {
        console.log(error);
      });
    history.push("/");
  };
  // ----------end-----send data in data base------------------------------

  const DataSubmit = (e) => {
    e.preventDefault();
    SendUserdata(); //calling a function for send data to DB
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add To-Do's</h2>
        <form onSubmit={DataSubmit}>
          <div className="form-group m-3 ">
            <input
              type="text"
              name="title"
              required
              value={postUser.title}
              onChange={(e) => setDataFun(e)}
              className="form-control form-control-lg"
              placeholder="Title"
            />
          </div>
          <div className="form-group m-3">
            <textarea
              type="text"
              required
              name="dsc"
              value={postUser.dsc}
              onChange={(e) => setDataFun(e)}
              className="form-control form-control-lg"
              placeholder="Description"
            />
          </div>

          <button className="btn btn-danger m-3 w-100">Save</button>
        </form>
      </div>
    </div>
  );
};
export default Addtodo;
