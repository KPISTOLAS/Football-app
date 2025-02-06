package com.example.football.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {

    void deleteByName(String playerName);

    @Query("SELECT p FROM Player p")
    List<Player> getAllPlayers();

    Optional<Player> findByName(String name);

    // Add these methods for filtering
    List<Player> findByTeam(String team);

    List<Player> findByPosition(String position);

    List<Player> findByNation(String nation);

    List<Player> findByTeamAndPosition(String team, String position);
}
