import { People } from './people-list/people-list.component.model';
import { Starships } from './starships-list/starships-list.component.model';

export interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Starships | People; // TODO: PESQUISAR COMO FAZER
}
