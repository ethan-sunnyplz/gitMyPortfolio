import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from '../../skill';
import { SkillService } from '../../skill.service';




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [NgbProgressbarConfig, SkillService] // add the NgbProgressbarConfig to the component providers
})

export class SkillsComponent implements OnInit {

   skills: Skill[];

  constructor(config: NgbProgressbarConfig, private skillService: SkillService) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'warning';
  }

  getSkills(): void {
    this.skillService.getSkills().then(skills => this.skills = skills);
  }

  ngOnInit(): void {
    this.getSkills();
  }
}

