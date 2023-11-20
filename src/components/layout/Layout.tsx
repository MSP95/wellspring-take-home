import { Outlet, useNavigation } from "react-router-dom";
import "./styles.css";
import Navbar from "../navbar";

function Layout() {
  let navigation = useNavigation();

  return (
    <div className="layout">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
