export interface ApiPeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<People>;
}


export interface People {
    id: number;
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    filmes: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    create: string;
    edited: string;
    url: string;
}