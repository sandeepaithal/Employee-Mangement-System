package com.example.employeemanagamentapp.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.employeemanagamentapp.model.Employee;
import com.example.employeemanagamentapp.repository.EmployeeRepository;

@Repository
public class EmployeeDao {
   
	@Autowired
	private EmployeeRepository employeerepository;
	

    public Employee saveEmployee(Employee emp) {
    	 return employeerepository.save(emp);
    }
    public Employee UpdateEmployee(Employee emp) {
   	 return employeerepository.save(emp);
   }
    public Optional<Employee> findById(int id) {
		return employeerepository.findById(id);
	}
    public boolean deleteById(int id) {
		Optional<Employee> recEmployee = findById(id);
		if (recEmployee.isPresent()) {
			employeerepository.delete(recEmployee.get());
			return true;
		}
		return false;
	}


}




