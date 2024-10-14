import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();  
  const assignment = db.assignments.find((a: any) => a._id === aid);
  if (!assignment) {
    return <div>Assignment1234</div>;  
  }
  return (
    <div id="wd-assignments-editor" className="container my-4">      
      <div className="mb-3">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          className="form-control"
          defaultValue={assignment.title}  
        />
      </div>

      <div className="mb-3">

        <textarea
          id="wd-description"
          className="form-control"
          rows={3} 
        >
          The assignment is available online. Submit a link to the landing page of
        </textarea>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input
            id="wd-points"
            className="form-control"
            defaultValue={100}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
          <select id="wd-group" className="form-select">
            <option value="Assignments">Assignments</option>
            <option value="Projects">Projects</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="Decimal">Decimal</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <select id="wd-submission-type" className="form-select">
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label>Online Entry Options</label><br />
        <div>
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry" className="ms-1">Text Entry</label><br />
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url" className="ms-1">Website URL</label><br />
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings" className="ms-1">Media Recordings</label><br />
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation" className="ms-1">Student Annotation</label><br />
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload" className="ms-1">File Uploads</label>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign to
          </label>
          <input type="text" id="wd-assign-to" defaultValue="Everyone" className="form-control" />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue="2000-01-01" className="form-control" />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">
            Available from
          </label>
          <input type="date" id="wd-available-from" defaultValue="2000-01-01" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">
            Until
          </label>
          <input type="date" id="wd-available-until" defaultValue="2000-01-02" className="form-control" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}
