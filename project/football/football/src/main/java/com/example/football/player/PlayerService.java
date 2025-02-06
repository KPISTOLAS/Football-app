package com.example.football.player;

import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {
    private PlayerRepository playerRepository;
    private static final Logger logger = LoggerFactory.getLogger(PlayerService.class);
    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }
    public List<Player> getPlayers() {
        return playerRepository.getAllPlayers();
    }

    public List<Player> getPlayerFromTeam(String teamName) {
        return playerRepository.findByTeam(teamName);
    }
    public List<Player> getPlayerByName(String searchName) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchName.toLowerCase()))
                .collect(Collectors.toList());
    }
    public List<Player> getPlayersByPos(String searchPos) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getPos().toLowerCase().contains(searchPos.toLowerCase()))
                .collect(Collectors.toList());
    }
    public List<Player> getPlayersByNation(String searchNation) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getNation().toLowerCase().contains(searchNation.toLowerCase()))
                .collect(Collectors.toList());
    }
    public List<Player> getPlayersByTeamAndPosition(String team, String position){
        return playerRepository.findAll().stream()
                .filter(player -> team.equals(player.getTeam()) && position.equals(player.getPos()))
                .collect(Collectors.toList());
    }
    public Player addPlayer(Player player) {
        playerRepository.save(player);
        return player;
    }
    public Player updatePlayer(Player updatedPlayer) {
        Optional<Player> existingPlayer = playerRepository.findByName(updatedPlayer.getName());

        if (existingPlayer.isPresent()) {
            Player playerToUpdate = existingPlayer.get();
            playerToUpdate.setName(updatedPlayer.getName());
            playerToUpdate.setNation(updatedPlayer.getNation());
            playerToUpdate.setPos(updatedPlayer.getPos());
            playerToUpdate.setAge(updatedPlayer.getAge());
            playerToUpdate.setMp(updatedPlayer.getMp());
            playerToUpdate.setStarts(updatedPlayer.getStarts());
            playerToUpdate.setMin(updatedPlayer.getMin());
            playerToUpdate.setGls(updatedPlayer.getGls());
            playerToUpdate.setAst(updatedPlayer.getAst());
            playerToUpdate.setPk(updatedPlayer.getPk());
            playerToUpdate.setCrdy(updatedPlayer.getCrdy());
            playerToUpdate.setCrdr(updatedPlayer.getCrdr());
            playerToUpdate.setXg(updatedPlayer.getXg());
            playerToUpdate.setXag(updatedPlayer.getXag());
            playerToUpdate.setTeam(updatedPlayer.getTeam());
            playerRepository.save(playerToUpdate);
            return playerToUpdate;
        }
        return null;
    }

    @Transactional
    public void deletePlayer(String playerName) {
        playerRepository.deleteByName(playerName);
    }
}
