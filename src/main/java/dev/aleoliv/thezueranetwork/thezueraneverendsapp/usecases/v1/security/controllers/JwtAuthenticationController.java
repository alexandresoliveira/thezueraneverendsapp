package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.controllers;

import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.dtos.SecurityUserRequestDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.dtos.SecurityUserResponseDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.services.JwtAuthenticationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    private final JwtAuthenticationService service;

    public JwtAuthenticationController(JwtAuthenticationService service) {
        this.service = service;
    }

    public SecurityUserResponseDTO store(@RequestBody SecurityUserRequestDTO requestDTO) {
        return null;
    }
}
