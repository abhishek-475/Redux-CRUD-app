import React, { useState } from "react";
import { removeUser } from "../redux/employeSlice";
import { useSelector, useDispatch } from "react-redux";
function Users({ handleEdit }) {
  const { employee } = useSelector((state) => state.EmployeeReducer);
  // console.log(employee);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid mt-4">
        {employee.length > 0 ? (
          <div className="table-responsive w-100">
            <table className="table ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>

                    <td>
                      <button className="btn" onClick={() => handleEdit(item)}>
                        <i className="fa-solid fa-pen" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => dispatch(removeUser(item.email))}>
                        <i
                          className="fa-solid fa-trash"
                          style={{ color: "#d51010" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mt-3">No employees added yet.</p> // Message shown when no employees exist
        )}
      </div>
    </>
  );
}

export default Users;
