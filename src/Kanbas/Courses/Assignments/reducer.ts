import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
  group: string;
  editing?: boolean; // Optional property for editing state
}

const initialState = { assignments: assignments as Assignment[] };

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        course: assignment.course,
        group: assignment.group,
      };
      state.assignments.push(newAssignment); // Directly push to the array
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((m: Assignment) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: Assignment) =>
        m._id === assignment._id ? assignment : m
      );
    },
    setEditing: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: Assignment) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addAssignment, updateAssignment, setEditing, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
