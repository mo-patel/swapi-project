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
  homeworld: string;
  created: string;
  edited: string;
}

export interface PlanetDetails {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}
