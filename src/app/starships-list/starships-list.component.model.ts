export interface ApiStarshipsResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<Starships>;
}

export interface Starships {
    id: number;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: number;
    MGLT: number;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}