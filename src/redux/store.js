import { configureStore } from "@reduxjs/toolkit";
import employeSlice from "./employeSlice";
const EmployeStore = configureStore({
  reducer: {
    EmployeeReducer: employeSlice,
  },
});
export default EmployeStore;
