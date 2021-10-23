export interface ThisIsUser {
  id: number;
  type: string;
  attributes: UserData;
}

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
}

export interface FilmEPK {
  id: string | number;
  type: string;
  attributes: Attributes;
}
export interface Attributes {
  user_id: number;
  movie_title: string;
  genre: string;
  country: string;
  release_year: number;
  run_time: number;
  language: string;
  budget: number;
  website: string;
  production_company: string;
  distribution: string;
  awards: Award[];
  presses: Press[];
}

export interface Press {
  id: number;
  film_epk_id: number;
  name_of_publication: string;
  description: string;
  link: string;
}

export interface Award {
  id: number;
  film_epk_id: number;
  name: string;
  year: string;
  award_type: string;
}

