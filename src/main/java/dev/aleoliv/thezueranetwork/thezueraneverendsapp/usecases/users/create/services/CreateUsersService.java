package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.services;

import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.entities.UserEntity;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.repositories.UserRepository;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.exceptions.ServiceApiException;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.dtos.CreateUsersRequestDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.users.create.dtos.CreateUsersResponseDTO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CreateUsersService {

    private final UserRepository userRepository;

    public CreateUsersService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public CreateUsersResponseDTO execute(CreateUsersRequestDTO requestDTO) {
        Optional<UserEntity> optionalUserEntity = userRepository.findByEmail(requestDTO.getEmail());

        if (optionalUserEntity.isPresent()) {
            throw new ServiceApiException(String.format("Exists user with this email (%s)", optionalUserEntity.get().getEmail()));
        }

        UserEntity entity = new UserEntity();
        entity.setName(requestDTO.getName());
        entity.setEmail(requestDTO.getEmail());
        entity.setPassword(requestDTO.getPassword());

        UserEntity savedEntity = userRepository.saveAndFlush(entity);

        var responseDTO = new CreateUsersResponseDTO(savedEntity.getId(), savedEntity.getName(), savedEntity.getEmail());

        return responseDTO;
    }
}
