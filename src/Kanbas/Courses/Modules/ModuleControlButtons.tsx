import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end align-items-center">
      <GreenCheckmark />
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
