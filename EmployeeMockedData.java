package Demo;

import java.util.ArrayList;
import java.util.List;

import Demo.model.Employee;

public class EmployeeMockedData {
	private List<Employee> employees;
	
	private static EmployeeMockedData instance = null;
	public static EmployeeMockedData getInstance() {
		if(instance == null) {
			instance = new EmployeeMockedData();
		}
		return instance;
	}
	
	
	public EmployeeMockedData() {
		employees = new ArrayList<Employee>();
		//Employee(Long id, String firstName, String lastName, String description)
		
		Employee emp = new Employee(101L, "hamster", "black", "black cagemate");
		Employee emp1 = new Employee(102L, "hammy", "furry", "furry cagemate");
		Employee emp2 = new Employee(103L, "longhair", "banded", "long hair cagemate");
		employees.add(emp);
		employees.add(emp1);
		employees.add(emp2);
	}
	
	
	
	public EmployeeMockedData(List<Employee> employees) {
		super();
		this.employees = employees;
	}



	public List<Employee> getEmployees() {
		return employees;
	}
	
	
	public Employee getEmployeeByID (long id) {
		for (Employee emp : employees) {
			if (emp.getId()==id) {
				return emp;
			}
		}
		
		return null;
		
	}
	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}
	
	
}
