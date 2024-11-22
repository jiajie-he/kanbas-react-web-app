import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();  
  const isNew = aid === "new";  
  const assignment = isNew
    ? {
        title: "",
        description: "",
        points: 100,
        group: "Assignments",
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
      }
    : db.assignments.find((a) => a._id === aid);
  
  const [title, setTitle] = useState(assignment?.title || "Untitled Assignment");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 100);
  const [group, setGroup] = useState(assignment?.group || "Assignments");
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [availableFrom, setAvailableFrom] = useState(assignment?.availableFrom || "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.availableUntil || "");


  const handleSave = () => {
    const newAssignment = {
      _id: isNew ? Date.now().toString() : aid, 
      title,
      description,
      points,
      group,
      dueDate,
      availableFrom,
      availableUntil,
    };

  };

  if (!isNew && !assignment) {
    return <div>Assignment not found</div>;  
  }

  return (
    <div id="wd-assignments-editor" className="container my-4">      
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select 
            id="wd-group" 
            className="form-select" 
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            type="date"
            id="wd-available-until"
            className="form-control"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}


