// EmployeeComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/findemployee.css';

const EmployeeComponent = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/${employeeId}`);
     alert("fetching")
      setEmployeeData(response.data);
      setError('');
    } catch (err) {
        alert("unable to fetch")
      setError(err.response.data);
      setEmployeeData(null);
    }
  };

  return (
    <div>
      <h2>Employee Information</h2>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={handleInputChange}
      />
      <button onClick={fetchEmployeeData}>Fetch Employee</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {employeeData && (
        <div>
          <p>ID: {employeeData.id}</p>
          <p>Name: {employeeData.name}</p>
          <p>Email: {employeeData.email}</p>
          <p>Phone:{employeeData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeComponent;
