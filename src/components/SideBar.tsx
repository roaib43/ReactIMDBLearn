function SideBar() {
  return (
    <>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
        >
          Find Movies
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          Popular Movies
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          Upcoming Movies
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          Porta ac consectetur ac
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          disabled
        >
          Vestibulum at eros
        </button>
      </div>
    </>
  );
}

export default SideBar;
