import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiPeopleResponse } from './people-list.component.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {

  constructor(private http: HttpClient) { }

  getPeopleList() {
    return this.http.get<ApiPeopleResponse>(environment.people.peopleEndPoint);
  }
}
