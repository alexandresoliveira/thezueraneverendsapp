package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@AllArgsConstructor
@Getter
public class CreateUsersResponseDTO {

    private final UUID id;
    private final String name;
    private final String email;
}
