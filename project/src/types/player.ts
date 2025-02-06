export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  nationality: string;
  age: number;
  number?: number;
  image?: string;
}

export type SearchFilters = {
  name?: string;
  team?: string;
  position?: string;
  nationality?: string;
};