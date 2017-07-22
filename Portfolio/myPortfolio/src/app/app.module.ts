import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SkillProgressbarComponent } from './components/skill-progressbar/skill-progressbar.component';
import { HobbyCarousel1Component } from './components/hobby-carousel1/hobby-carousel1.component';
import { HobbyCarousel2Component } from './components/hobby-carousel2/hobby-carousel2.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillProgressbarComponent,
    HobbyCarousel1Component,
    HobbyCarousel2Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
