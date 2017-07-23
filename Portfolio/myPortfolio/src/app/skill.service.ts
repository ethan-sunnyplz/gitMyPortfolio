import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Skill } from './skill';


@Injectable()
export class SkillService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private skillsUrl = 'api/skills';

  constructor(private http: Http) { }


  getSkills(): Promise<Skill[]> { //4
    return this.http.get(this.skillsUrl)
               .toPromise()
               .then(response => response.json().data as Skill[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> { //9
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
