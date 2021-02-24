import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from './people-list/people-list.component.model';
import { Starships } from './starships-list/starships-list.component.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }


  getPeople(id: number): Observable<People> {
    return this.http.get<People>(`${environment.people.peopleEndPoint}${id}/`);
  }

  getStarships(id: number): Observable<Starships> {
    return this.http.get<Starships>(`${environment.starships.starshipsEndPoint}${id}/`);
  }

}
