import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Page/Home";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Addtodo from "./Component/Addtodo";

import Edit from "./Component/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="my-nav">
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addtodo" component={Addtodo} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
