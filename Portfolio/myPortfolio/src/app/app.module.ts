import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import { HobbyCarousel1Component } from './components/hobby-carousel1/hobby-carousel1.component';
import { HobbyCarousel2Component } from './components/hobby-carousel2/hobby-carousel2.component';
import { SkillsComponent } from './components/skills/skills.component';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HobbyCarousel1Component,
    HobbyCarousel2Component,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
