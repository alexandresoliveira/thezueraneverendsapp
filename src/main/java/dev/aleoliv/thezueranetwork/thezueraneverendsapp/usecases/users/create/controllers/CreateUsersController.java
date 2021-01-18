package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.controllers;

import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.dtos.CreateUsersRequestDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.dtos.CreateUsersResponseDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.services.CreateUsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/create")
public class CreateUsersController {

    private final CreateUsersService service;

    public CreateUsersController(CreateUsersService service) {
        this.service = service;
    }

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public CreateUsersResponseDTO handle(@RequestBody CreateUsersRequestDTO createUsersRequestDTO) {
        return service.execute(createUsersRequestDTO);
    }
}
