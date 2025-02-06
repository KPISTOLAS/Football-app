import React, { useState, useEffect } from 'react';
import { Percent as Soccer } from 'lucide-react';
import { Player, SearchFilters } from './types/player';
import { fetchPlayers } from './api/players';
import SearchBar from './components/SearchBar';
import PlayerGrid from './components/PlayerGrid';

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const loadPlayers = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const data = await fetchPlayers(filters);
        setPlayers(data);
      } catch (err) {
        setError('Failed to load players. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Soccer className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Football Player Search</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <SearchBar filters={filters} onFilterChange={setFilters} />
        <PlayerGrid players={players} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;