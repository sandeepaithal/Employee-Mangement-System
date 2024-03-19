package com.example.employeemanagamentapp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employeemanagamentapp.dto.ResponseStructure;
import com.example.employeemanagamentapp.model.Employee;
import com.example.employeemanagamentapp.service.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeservice;
	@PostMapping
	 public ResponseEntity<ResponseStructure<Employee>> saveEmployee(@RequestBody Employee emp) {
	        return employeeservice.saveEmployee(emp);
	    }

	    @PutMapping
	    public ResponseEntity<ResponseStructure<Employee>> updateEmployee(@RequestBody Employee emp) {
	        return employeeservice.updateEmployee(emp);
	
	    }
	    @GetMapping(value = "/{id}")
		public ResponseEntity<ResponseStructure<Employee>> findById(@PathVariable(name = "id") int id) {
			return employeeservice.findById(id);
		}
	    @DeleteMapping(value = "/{id}")
		public ResponseEntity<ResponseStructure<String>> deleteById(@PathVariable(name = "id") int id) {
			return employeeservice.deleteById(id);
		}
}
	    
