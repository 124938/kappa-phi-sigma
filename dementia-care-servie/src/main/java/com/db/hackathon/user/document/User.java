package com.db.hackathon.user.document;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@Data
@Document(collection = "test_col")
public class User {
    @Id
    private String id;
    private String email;
    private String nickname;
    private String profession;
}
