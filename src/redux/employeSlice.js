import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const EmployeSlice = createSlice({
  name: "employee",
  initialState: {
    employee: [{}],
  },
  reducers: {
    addUser(state, action) {
      state.employee.push(action.payload);
      toast.success("Employee is added");
    },
    removeUser(state, action) {
      state.employee = state.employee.filter(
        (item) => item.email != action.payload
      );
      toast.success("Employe Removed!!");
    },
    updateUser(state, action) {
      const index = state.employee.findIndex(
        (item) => item.email === action.payload.email
      );
      if (index !== -1) {
        state.employee[index] = { ...state.employee[index], ...action.payload };
        toast.success("Employee Updated!!");
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = EmployeSlice.actions;
export default EmployeSlice.reducer;
