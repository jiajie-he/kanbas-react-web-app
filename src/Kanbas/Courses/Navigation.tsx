import { Link, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas/Courses/${cid}/Home`} id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </Link>
      <Link to={`/Kanbas/Courses/${cid}/Modules`} id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Modules </Link>
      <Link to={`/Kanbas/Courses/${cid}/Piazza`}  id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Piazza </Link>
      <Link to={`/Kanbas/Courses/${cid}/Zoom`}  id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </Link>
      <Link to={`/Kanbas/Courses/${cid}/Quizzes`}  id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </Link>
      <Link to={`/Kanbas/Courses/${cid}/People`}  id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </Link>
    </div>
);}
