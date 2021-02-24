import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { PeopleListService } from './people-list/people-list.service';
import { StarshipsListService } from './starships-list/starships-list.service';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    StarshipsListComponent,
    PeopleDetailComponent,
    StarshipsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PeopleListService,
    StarshipsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
