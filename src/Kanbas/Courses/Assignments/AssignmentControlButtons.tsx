import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({ deleteAssignment, assignmentId }: { deleteAssignment: (assignmentId: any) => void; assignmentId: any }) {
  const handleDelete = () => {
    deleteAssignment(assignmentId);
  };

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
