import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex home-layout" id="wd-home">
      <div className="flex-fill main-content">
        <Modules />
      </div>
      <div className="d-none d-xl-block sidebar-status">
        <CourseStatus />
      </div>
    </div>
  );
}
