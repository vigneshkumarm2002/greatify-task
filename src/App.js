import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import { useState } from "react";
import ManageUniversity from "./components/manageUniversity";
import Template from "./components/template";

function App() {
  const [sideBarResize, setSideBarResize] = useState(
    localStorage.getItem("sideBarResize") === "true" ? true : false
  );

  return (
    <Router>
      <div className="p-4">
        <Sidebar
          sideBarResize={sideBarResize}
          setSideBarResize={setSideBarResize}
        />
        <div className={`${!sideBarResize ? "pl-[260px]" : "pl-[90px]"} `}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route
              exact
              path="/manage-university"
              element={<ManageUniversity />}
            />
            <Route
              exact
              path="/manage-course-plan"
              element={<Template title={"Manage Course Plan"} />}
            />
            <Route
              exact
              path="/configure-curriculam"
              element={<Template title={"Configure Curriculam"} />}
            />
            <Route
              exact
              path="/manage-employers"
              element={<Template title={"Manage Employers"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
