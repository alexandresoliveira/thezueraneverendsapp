package dev.aleoliv.thezueranetwork.thezueraneverendsapp.usecases.phrases.create.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@AllArgsConstructor
@Getter
public class CreatePhraseRequestDTO {

    private final String text;
    private final UUID userId;
}
