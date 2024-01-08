package com.user.controller;

import java.util.List;

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


import com.user.entity.UserEntity;
import com.user.service.UserService;


@RestController
@RequestMapping
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userservice;
	
	@PostMapping("/add")
	public UserEntity addUser(@RequestBody UserEntity user)
	{
		return userservice.postUser(user);
	}
	@GetMapping("/all")
	public List<UserEntity> getAllUser()
	{
		return userservice.readUser();
	}
	@DeleteMapping("/del/{id}")
	public void deleteCustomer(@PathVariable int id)
	{
		userservice.deleteUser(id);
	}
	@GetMapping("/{id}")
	public ResponseEntity<UserEntity>getCustomerById(@PathVariable int id){
		UserEntity user=userservice.getUserById(id);
		if(user == null)
		{
			return ResponseEntity.notFound().build();
		}
		else
		{
			return ResponseEntity.ok(user);
		}
	}
	@PutMapping("/{id}")
	public ResponseEntity<UserEntity> updateCustomer(@PathVariable int id,@RequestBody UserEntity user)
	{
		UserEntity userEntity=userservice.updateUser(id,user);
		if(user==null)
		{
			return ResponseEntity.notFound().build();
		}
		else
		{
			return ResponseEntity.ok(user);
		}
	}
}
