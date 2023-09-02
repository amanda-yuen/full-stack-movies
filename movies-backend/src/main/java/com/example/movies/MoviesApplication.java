package com.example.movies;

//this package contains a method called run which we need to use to start the spring app.
import org.springframework.boot.SpringApplication;
//import spring boot app annotation - let compiler know what this class does
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
//lets the framework know that this class is actually a REST API, not just another class.
//@RestController
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}

}


