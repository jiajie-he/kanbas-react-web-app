import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa"; 

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center mb-3"> 

      <div className="flex-grow-1 me-2" style={{ maxWidth: '300px' }}>
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
      </div>


      <div className="d-flex">
        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-danger me-1" 
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>

        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-secondary" 
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div>
  );
}
