import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/people-list',
    pathMatch: 'full',
  },
  {
    path: 'people-list',
    component: PeopleListComponent
  },
  {
    path: 'starships-list',
    component: StarshipsListComponent
  },
  {
    path: 'people-detail/:id',
    component: PeopleDetailComponent
  },
  {
    path: 'starships-detail/:id',
    component: StarshipsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
