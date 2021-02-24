import { Component, OnInit } from '@angular/core';
import { Starships } from './starships-list.component.model';
import { StarshipsListService } from './starships-list.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: Array<Starships>;

  constructor(private starshipsListService: StarshipsListService) { }

  ngOnInit(): void {
    this.listStarships();
  }

  listStarships(): void {
    this.starshipsListService.getStarshipsList().subscribe(data => {
      this.starships = data.results;
      const r = new RegExp('\\d+');
      for (let element of this.starships) {
        const id = element.url.match(r)[0];
        element.id = parseInt(id);
      }
    });
  }

}
