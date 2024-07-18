package com.db.hackathon.user;

import com.db.hackathon.user.document.User;
import com.db.hackathon.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        log.info("Trying to fetch list of users...");
        return userService.fetchUsers();
    }
}
