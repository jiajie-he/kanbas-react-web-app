import AssignmentControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
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
            <li className="wd-assignment-list-item list-group-item p-3 d-flex">
              <BsGripVertical className="me-3 fs-4 align-self-center" />
              <div className="flex-grow-1">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                </a>
                <p>
                  Multiple Modules | <strong>Not available until</strong> May 6 at 12:00 am | Due May 13 at 11:59pm | 100 pts
                </p>
              </div>

              <div className="align-self-center">
                <AssignmentControlButtons />
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 d-flex">
              <BsGripVertical className="me-3 fs-4 align-self-center" />
              <div className="flex-grow-1">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
                  A2 - CSS + BOOTSTRAP
                </a>
                <p>
                  Multiple Modules | <strong>Not available until</strong> May 9 at 12:00 am | Due May 17 at 11:59pm | 100 pts
                </p>
              </div>
              <div className="align-self-center">
                <AssignmentControlButtons />
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 d-flex">
              <BsGripVertical className="me-3 fs-4 align-self-center" />
              <div className="flex-grow-1">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
                  A3 - JAVASCRIPT + REACT
                </a>
                <p>
                  Multiple Modules | <strong>Not available until</strong> May 11 at 12:00 am | Due May 23 at 11:59pm | 100 pts
                </p>
              </div>
              <div className="align-self-center">
                <AssignmentControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
