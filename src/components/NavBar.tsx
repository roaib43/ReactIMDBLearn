function NavBar() {
  return (
    <>
      <nav
        style={{
          fontSize: "28px",
          paddingLeft: "0.5em",
          paddingTop: "0.5em",
          paddingBottom: "0em",
          backgroundColor: "#032541",
        }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <a className="navbar-brand" href="#">
          <img src="/../public/logo.svg" width="80" height="80" alt="" />
        </a>
        <p style={{ color: "#9DDDFF", fontSize: "21px", paddingLeft: "0em" }}>
          React WebApplication <br />
          Integrated TMDB Movies
        </p>
      </nav>
    </>
  );
}

export default NavBar;
