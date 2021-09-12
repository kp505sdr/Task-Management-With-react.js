import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const history = useHistory();
  const [userdata, setUserData] = useState({});
  const [loader, setloader] = useState(true);
  const fetchedData = async () => {
    const res = await axios
      .get("http://localhost:3003/users")
      .then((res) => {
        console.log(res);
        setUserData(res.data.reverse());
        setloader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchedData();
  }, [setUserData]);
  // -------------------delete start-----------------

  const DeleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);

    fetchedData();
  };

  // ---------------------delet finish-------------------

  if (loader) {
    return "Loading...";
  }
  return (
    <>
      <div className="header-div">
        <h4 className=" text-center p-2">Open</h4>
        <h4 className=" text-center p-2">In-progress</h4>
        <h4 className=" text-center p-2">Complited</h4>
      </div>
      <div className="container-flude d-flex justify-content-center  ">
        <div className="mycontent-div">
          {userdata
            .filter((fltr) => fltr.status == "open")
            .map((user) => (
              <div className="card mt-3 my-card " style={{ width: "16rem" }}>
                <h4 className="card-title text-white bg-dark text-center p-2">
                  {user.title}
                </h4>
                <div className="card-body">
                  <p className="card-text">{user.dsc}</p>
                  <p className="card-link " style={{ fontSize: "12px" }}>
                    {user.createDate == user.updateDate
                      ? `Created on:-${user.createDate}`
                      : `Created on:-${user.createDate} Updated on:-${user.updateDate}`}
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    status:- <span className="text-primary">{user.status}</span>
                  </p>
                  <div className="d-flex justify-content-around bg-dark">
                    <Link to={`/edit/${user.id}`}>
                      <i className="far fa-edit p-2 text-warning" />
                    </Link>

                    <a
                      onClick={() => {
                        window.confirm(
                          "Do you really want to delete this TO-DO"
                        )
                          ? DeleteUser(user.id)
                          : history.push("/");
                      }}
                    >
                      <i
                        className="far fa-trash-alt p-2 text-danger "
                        style={{ cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mycontent-div">
          {userdata
            .filter((fltr) => fltr.status == "in-progress")
            .map((user) => (
              <div className="card mt-3 my-card " style={{ width: "16rem" }}>
                <h4 className="card-title text-white bg-dark text-center p-2">
                  {user.title}
                </h4>
                <div className="card-body">
                  <p className="card-text">{user.dsc}</p>
                  <p className="card-link " style={{ fontSize: "12px" }}>
                    {user.createDate == user.updateDate
                      ? `Created on:-${user.createDate}`
                      : `Created on:-${user.createDate} Updated on:-${user.updateDate}`}
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    status:- <span className="text-danger"> {user.status}</span>
                  </p>
                  <div className="d-flex justify-content-around bg-dark">
                    <Link to={`/edit/${user.id}`}>
                      <i className="far fa-edit p-2 text-warning" />
                    </Link>

                    <a
                      onClick={() => {
                        window.confirm(
                          "Do you really want to delete this TO-DO"
                        )
                          ? DeleteUser(user.id)
                          : history.push("/");
                      }}
                    >
                      <i
                        className="far fa-trash-alt p-2 text-danger "
                        style={{ cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mycontent-div">
          {userdata
            .filter((fltr) => fltr.status == "complited")
            .map((user) => (
              <div className="card mt-3 my-card " style={{ width: "16rem" }}>
                <h4 className="card-title text-white bg-dark text-center p-2">
                  {user.title}
                </h4>
                <div className="card-body">
                  <p className="card-text">{user.dsc}</p>
                  <p className="card-link " style={{ fontSize: "12px" }}>
                    {user.createDate == user.updateDate
                      ? `Created on:-${user.createDate}`
                      : `Created on:-${user.createDate} Updated on:-${user.updateDate}`}
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    status:-
                    <span className="text-success"> {user.status}</span>
                  </p>
                  <div className="d-flex justify-content-around bg-dark">
                    <Link to={`/edit/${user.id}`}>
                      <i className="far fa-edit p-2 text-warning" />
                    </Link>

                    <a
                      onClick={() => {
                        window.confirm(
                          "Do you really want to delete this TO-DO"
                        )
                          ? DeleteUser(user.id)
                          : history.push("/");
                      }}
                    >
                      <i
                        className="far fa-trash-alt p-2 text-danger "
                        style={{ cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
