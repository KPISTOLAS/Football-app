import React from 'react';
import { Search } from 'lucide-react';
import { SearchFilters } from '../types/player';

interface SearchBarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

const positions = [
  'Goalkeeper',
  'Defender',
  'Midfielder',
  'Forward'
];

export default function SearchBar({ filters, onFilterChange }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[240px]">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Search player name..."
              value={filters.name || ''}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <select
          name="team"
          value={filters.team || ''}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
        >
          <option value="">All Teams</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Manchester City">Manchester City</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Arsenal">Arsenal</option>
        </select>

        <select
          name="position"
          value={filters.position || ''}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
        >
          <option value="">All Positions</option>
          {positions.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>

        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          value={filters.nationality || ''}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
        />
      </div>
    </div>
  );
}