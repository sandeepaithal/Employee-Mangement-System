package com.example.employeemanagamentapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.employeemanagamentapp.dao.EmployeeDao;
import com.example.employeemanagamentapp.dto.ResponseStructure;
import com.example.employeemanagamentapp.model.Employee;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeDao employeedao;

	public ResponseEntity<ResponseStructure<Employee>> saveEmployee(Employee emp) {
		ResponseStructure<Employee> structure = new ResponseStructure<>();
		structure.setData(employeedao.saveEmployee(emp));
		structure.setMessage("Employee  Saved");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<Employee>> updateEmployee(Employee employee) {
		Optional<Employee> recEmployee = employeedao.findById(employee.getId());
		ResponseStructure<Employee> structure = new ResponseStructure<>();
		if (recEmployee.isPresent()) {
			Employee dbEmployee = recEmployee.get();
			dbEmployee.setEmail(employee.getEmail());
			dbEmployee.setName(employee.getName());
			dbEmployee.setPhone(employee.getPhone());
			
			structure.setMessage("Employee Updated");
			structure.setData(employeedao.saveEmployee(employee));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.ACCEPTED);
		}
		structure.setMessage("Cannot Update Employee as Id is Invalid");
		structure.setData(null);
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.NOT_FOUND);
	}


	public ResponseEntity<ResponseStructure<Employee>> findById(int id) {
		Optional<Employee> recEmployee = employeedao.findById(id);
		ResponseStructure<Employee> structure = new ResponseStructure<>();
		if (recEmployee.isPresent()) {
			structure.setData(recEmployee.get());
			structure.setMessage("Employee Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.OK);
		}
		structure.setData(null);
		structure.setMessage("Employee Not Found");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<Employee>>(structure, HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<ResponseStructure<String>> deleteById(int id) {
		Optional<Employee> recEmployee = employeedao.findById(id);
		ResponseStructure<String> structure = new ResponseStructure<>();
		if (recEmployee.isPresent()) {
			structure.setMessage("Employee found");
			structure.setData("Employee deleted");
			structure.setStatusCode(HttpStatus.OK.value());
			employeedao.deleteById(id);
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		structure.setMessage("Employee Not found");
		structure.setData("cannot delete Employee as Id is Invalid");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
	}

	

}
