import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-skill-progressbar',
  templateUrl: './skill-progressbar.component.html',
  styleUrls: ['./skill-progressbar.component.css'],
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class SkillProgressbarComponent implements OnInit {

  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'warning';
  }

  ngOnInit() {
  }
}