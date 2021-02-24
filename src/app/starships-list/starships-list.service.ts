import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiStarshipsResponse } from './starships-list.component.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsListService {

  constructor(private http: HttpClient) { }

  getStarshipsList() {
    return this.http.get<ApiStarshipsResponse>(environment.starships.starshipsEndPoint);
  }
}
