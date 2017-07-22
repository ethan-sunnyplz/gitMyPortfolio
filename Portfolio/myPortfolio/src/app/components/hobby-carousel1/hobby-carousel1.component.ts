import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hobby-carousel1',
  templateUrl: './hobby-carousel1.component.html',
  styleUrls: ['./hobby-carousel1.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class HobbyCarousel1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private h1 = "./assets/h1.jpg";
  private h2 = "./assets/h2.jpg";
  private h3 = "./assets/h3.jpg";
}

export class NgbdCarouselConfig {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 30;
    config.wrap = false;
    config.keyboard = false;
  }
}
