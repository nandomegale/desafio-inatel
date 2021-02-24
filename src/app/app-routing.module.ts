import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { StarshipListComponent } from './starship-list/starship-list.component';


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
    path: 'starship-list', 
    component: StarshipListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
