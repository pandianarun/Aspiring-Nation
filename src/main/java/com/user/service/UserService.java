package com.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.entity.UserEntity;
import com.user.repo.UserRepository;



@Service
public class UserService {
	
	@Autowired
private  UserRepository userrepo;
	
	public UserEntity postUser(UserEntity user)
	{
		return userrepo.save(user);
	}
	public List<UserEntity> readUser() {
		return userrepo.findAll();
	}
	public void deleteUser(int id) {
		userrepo.deleteById(id);	
	}
	public UserEntity getUserById(int cid) {
		return userrepo.findById(cid).orElse(null);	
	}
	public UserEntity updateUser(int id, UserEntity user) {
		Optional<UserEntity> optionalCustomer=userrepo.findById(id);
		if(optionalCustomer.isPresent())
		{
			UserEntity obj=optionalCustomer.get();
			obj.setName(user.getName());
			obj.setEmail(user.getEmail());
			obj.setPhone(user.getPhone());
			return userrepo.save(obj);
		}
		return null;
	}
}
