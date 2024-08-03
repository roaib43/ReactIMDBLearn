import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Search() {
  return (
    <>
      <div className="input-group rounded" style={{ fontSize: "28px" }}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button className="input-group-text border-0" id="search-addon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}

export default Search;
