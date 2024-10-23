// src/components/EmployeeForm.js

import React, { useState } from "react";
import { addEmployee } from "../services/api";

const EmployeeForm = ({ loadEmployees }) => {
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employee);
    loadEmployees();
    setEmployee({ name: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
