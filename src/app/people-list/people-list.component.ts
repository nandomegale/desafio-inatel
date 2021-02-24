import { Component, OnInit } from '@angular/core';
import { People } from './people-list.component.model';
import { PeopleListService } from './people-list.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Array<People>;

  constructor(private peopleListService: PeopleListService) { }

  ngOnInit(): void {
    this.listPeople();
  }

  listPeople(): void {
    this.peopleListService.getPeopleList().subscribe(data => {
      this.people = data.results;
      const r = new RegExp('\\d+');
      for (let element of this.people) {
        const id = element.url.match(r)[0];
        element.id = parseInt(id);
      }
    });
  }

}
