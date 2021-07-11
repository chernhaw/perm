package Demo;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import Demo.EmployeeMockedData;
import Demo.model.Employee;



@SpringBootApplication
@RestController
public class DemoApplication {
	
	EmployeeMockedData mockData = EmployeeMockedData.getInstance();
	

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World")String name) {
		return String.format("Hello %s!", name);
	}
	
	
	@GetMapping("/employee/{id}")
	public Employee show(@PathVariable String id) {
		long long_id = Long.parseLong(id);
		return mockData.getEmployeeByID(long_id);
		
	}
	
	
	@GetMapping("/employees")
	public List<Employee> show() {
		//long long_id = Long.parseLong(id);
		return mockData.getEmployees();
		
	}

}
