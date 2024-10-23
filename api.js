// src/services/api.js

const API_URL = "https://your-api-url.com"; // Replace with your actual API endpoint

export const getEmployees = async () => {
  const response = await fetch(`${API_URL}/employees`);
  return response.json();
};

export const addEmployee = async (employeeData) => {
  const response = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
  return response.json();
};

export const updateEmployee = async (id, employeeData) => {
  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeData),
  });
  return response.json();
};

export const deleteEmployee = async (id) => {
  await fetch(`${API_URL}/employees/${id}`, {
    method: "DELETE",
  });
};
