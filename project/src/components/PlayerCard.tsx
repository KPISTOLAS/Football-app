import React from 'react';
import { User } from 'lucide-react';
import { Player } from '../types/player';

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-gray-100">
        {player.image ? (
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-1/2 h-1/2 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{player.name}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p>Team: {player.team}</p>
          <p>Position: {player.position}</p>
          <p>Nationality: {player.nationality}</p>
          {player.number && <p>Number: {player.number}</p>}
          <p>Age: {player.age}</p>
        </div>
      </div>
    </div>
  );
}