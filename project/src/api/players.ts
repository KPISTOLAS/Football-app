import { Player, SearchFilters } from '../types/player';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export async function fetchPlayers(filters: SearchFilters = {}): Promise<Player[]> {
  const params = new URLSearchParams();
  
  // Map frontend filter names to backend parameter names
  if (filters.name) params.append('name', filters.name);
  if (filters.team) params.append('team', filters.team);
  if (filters.position) params.append('position', filters.position);
  if (filters.nationality) params.append('nation', filters.nationality); // Changed to match Java API

  try {
    const response = await fetch(`${API_BASE_URL}/player?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return []; // Return empty array for no results
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [data]; // Handle both array and single object responses
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
}