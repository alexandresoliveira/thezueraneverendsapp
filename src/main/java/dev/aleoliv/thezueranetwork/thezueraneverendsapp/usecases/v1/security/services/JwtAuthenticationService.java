package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.services;

import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.dtos.SecurityUserRequestDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.v1.security.dtos.SecurityUserResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class JwtAuthenticationService {

    public JwtAuthenticationService() {}

    public SecurityUserResponseDTO execute(SecurityUserRequestDTO requestDTO) {
        return null;
    }
}
