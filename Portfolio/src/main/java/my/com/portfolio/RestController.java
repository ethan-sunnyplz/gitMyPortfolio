package my.com.portfolio;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

	@RequestMapping("/api/aaa")
	public String greet() {
		return "zzzzzzzzzzzz!!!";
	}
}