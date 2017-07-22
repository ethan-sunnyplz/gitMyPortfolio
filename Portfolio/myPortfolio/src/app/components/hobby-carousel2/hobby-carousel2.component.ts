import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hobby-carousel2',
  templateUrl: './hobby-carousel2.component.html',
  styleUrls: ['./hobby-carousel2.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class HobbyCarousel2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private h4 = "./assets/h4.jpg";
  private h5 = "./assets/h5.jpg";
  private h6 = "./assets/h6.jpg";
}

export class NgbdCarouselConfig {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 30;
    config.wrap = false;
    config.keyboard = false;
  }
}
