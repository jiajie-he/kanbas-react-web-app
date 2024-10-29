import AssignmentControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; 
import { useSelector, useDispatch } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();  
  // const assignments = db.assignments;  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  
  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentsControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment: any) => (
              <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 d-flex">
                <BsGripVertical className="me-3 fs-4 align-self-center" />
                <div className="flex-grow-1">
                  <Link className="wd-assignment-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </Link>
                </div>
                <div className="align-self-center">
                  <AssignmentControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
