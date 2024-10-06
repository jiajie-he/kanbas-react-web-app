import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill border border-dark text-dark me-2">
        40% of Total
      </span>
      <span className="me-2" style={{ position: "relative", top: "2px" }}>
        <GreenCheckmark />
      </span>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
