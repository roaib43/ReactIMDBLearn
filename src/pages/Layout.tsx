import Content from "../components/Content";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function Layout() {
  return (
    <>
      <NavBar />
      <div
        style={{ fontSize: "28px", paddingLeft: "0em", paddingTop: "0.2em" }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10 bg-light">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
