import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { People } from '../people-list/people-list.component.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  @Input() people: People;

  // people: People;
  species: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getPeopleDetail();
  }

  getPeopleDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appService.getPeople(id).subscribe(people => this.people = people);

    /*
        this.peopleDetailService.getPeopleDetail().subscribe(data => {
          this.people = data;
          this.species = data.species
        });
      */
  }

}
