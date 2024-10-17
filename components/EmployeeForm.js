import React, { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({ name: '', position: '', department: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.position && employee.department) {
      addEmployee(employee);
      setEmployee({ name: '', position: '', department: '' });  // Reset the form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Employee Name"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="department"
        value={employee.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
