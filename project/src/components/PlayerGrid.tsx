import React from 'react';
import { Player } from '../types/player';
import PlayerCard from './PlayerCard';

interface PlayerGridProps {
  players: Player[];
  loading?: boolean;
  error?: string;
}

export default function PlayerGrid({ players, loading, error }: PlayerGridProps) {
  if (loading) {
    return (
      <div className="w-full text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  if (players.length === 0) {
    return (
      <div className="w-full text-center py-8 text-gray-500">
        No players found matching your search criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}