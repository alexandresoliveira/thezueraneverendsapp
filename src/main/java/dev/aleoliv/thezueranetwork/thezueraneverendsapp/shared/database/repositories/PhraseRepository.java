package dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.repositories;

import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.entities.PhraseEntity;
import dev.aleoliv.thezueranetwork.thezueraneverendsapp.shared.database.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface PhraseRepository extends JpaRepository<PhraseEntity, UUID> {

    Optional<PhraseEntity> findByTextAndAuthor(String text, UserEntity author);
}
