package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.phrases.create.services;

import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.entities.PhraseEntity;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.repositories.PhraseRepository;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.repositories.UserRepository;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.exceptions.ServiceApiException;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.phrases.create.dtos.CreatePhraseRequestDTO;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.phrases.create.dtos.CreatePhraseResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class CreatePhraseService {

    private final PhraseRepository phraseRepository;
    private final UserRepository userRepository;

    public CreatePhraseService(PhraseRepository phraseRepository, UserRepository userRepository) {
        this.phraseRepository = phraseRepository;
        this.userRepository = userRepository;
    }

    public CreatePhraseResponseDTO execute(CreatePhraseRequestDTO requestDTO) {

        var optionalUser = userRepository.findById(requestDTO.getUserId());

        if (!optionalUser.isPresent()) {
            throw new ServiceApiException("User don't exists.");
        }

        var optionalPhrase = phraseRepository.findByTextAndAuthor(requestDTO.getText(), optionalUser.get());

        if (optionalPhrase.isPresent()) {
            throw new ServiceApiException("Phrase exists!");
        }

        var entity = new PhraseEntity(requestDTO.getText(), optionalUser.get());

        var phraseEntity = phraseRepository.saveAndFlush(entity);

        return new CreatePhraseResponseDTO(phraseEntity.getText(), phraseEntity.getAuthor().getName());
    }
}
