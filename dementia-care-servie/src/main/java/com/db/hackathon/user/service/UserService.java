package com.db.hackathon.user.service;

import com.db.hackathon.user.document.User;
import com.db.hackathon.user.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> fetchUsers() {
        //return List.of("Shrey","Rakesh");
        return userRepository.findAll();
    }
}
