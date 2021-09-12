import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [postUser, setpostuser] = useState({
    id: "--",
    title: "--",
    dsc: "--",
    status: "--",
    updateDate: "--",
  });
  const setDataFun = (e) => {
    setpostuser({
      ...postUser,
      [e.target.name]: [e.target.value],
      updateDate: new Date().toLocaleString("en-IN"), //for update time
    });
  };
  // -----fetching data from DB by ID for update--------------
  const LoadUserdata = async () => {
    const res = await axios
      .get(`http://localhost:3003/users/${id}`)
      .then((res) => {
        setpostuser(res.data);
      });
  };
  useEffect(() => {
    LoadUserdata();
  }, []);
  // --end---fetching data from DB by ID for update--------------

  //------put method use for update DB------always use with State which need to update
  const SendUserdata = async (e) => {
    await axios
      .put(`http://localhost:3003/users/${id}`, postUser)

      .catch((error) => {
        console.log(error);
      });

    history.push("/");
  };
  //--------sending updated data to DB-------
  const DataSubmit = (e) => {
    e.preventDefault();
    SendUserdata();
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit To-Do</h2>
        <h5>ID: {postUser.id}</h5>
        <form onSubmit={DataSubmit}>
          <div className="form-group m-3 ">
            <input
              type="text"
              name="title"
              value={postUser.title}
              onChange={(e) => setDataFun(e)}
              className="form-control form-control-lg"
              placeholder="Title"
            />
          </div>
          <div className="form-group m-3">
            <textarea
              type="text"
              name="dsc"
              value={postUser.dsc}
              onChange={(e) => setDataFun(e)}
              className="form-control form-control-lg"
              placeholder="Descreption"
            />
          </div>

          <div className="form-group m-3">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="status"
              value={postUser.status}
              onChange={(e) => setDataFun(e)}
            >
              <option value="open">Open</option>
              <option value="in-progress">In-Progress</option>
              <option value="complited">Complited</option>
            </select>
          </div>

          <button className="btn btn-danger m-3 w-100">Update</button>
        </form>
      </div>
    </div>
  );
};
export default Edit;
