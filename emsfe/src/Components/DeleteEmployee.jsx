// EmployeeDeleteComponent.js

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/deleteemployee.css'

const EmployeeDeleteComponent = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const deleteEmployee = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/employee/${employeeId}`);
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err.response.data.error);
      setSuccessMessage('');
    }
  };

  return (
    <div className="deleteemployee">
      <h2>Delete Employee</h2>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={handleInputChange}
      />
      <button onClick={deleteEmployee}>Delete Employee</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default EmployeeDeleteComponent;
