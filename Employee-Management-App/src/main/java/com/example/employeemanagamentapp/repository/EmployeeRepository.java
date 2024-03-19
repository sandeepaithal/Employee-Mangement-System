package com.example.employeemanagamentapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employeemanagamentapp.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>  {
  
}
