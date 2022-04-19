export interface peopleRequest {
  count: number;
  next: string | null;
  previous: string | null;
  results: UserDetails[];
}

export interface UserDetails {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string;
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
}

export interface PlanetDetails {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}
