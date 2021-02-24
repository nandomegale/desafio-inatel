import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Starships } from '../starships-list/starships-list.component.model';

@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html',
  styleUrls: ['./starships-detail.component.css']
})
export class StarshipsDetailComponent implements OnInit {
  @Input() starships: Starships;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getStarshipsDetail();

  }
  getStarshipsDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appService.getStarships(id).subscribe(starships => this.starships = starships);
  }

}
