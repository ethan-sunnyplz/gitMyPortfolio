import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const skills = [
        { id: 1, type: 'general', name: 'Server Management', grade: 75},
        { id: 2, type: 'general', name: 'Amazon Web Service', grade: 60},
        { id: 3, type: 'general', name: 'Back-end Programming', grade: 85},
        { id: 4, type: 'general', name: 'Database Management', grade: 70},
        { id: 5, type: 'general', name: 'Information Security', grade: 70},
        { id: 6, type: 'general', name: 'MVC Design Pattern', grade: 80},
        { id: 7, type: 'language', name: 'Java (JSP & Servelet)', grade: 80},
        { id: 8, type: 'language', name: 'J-Query', grade: 85},
        { id: 9, type: 'language', name: 'Angular2', grade: 50},
        { id: 10, type: 'language', name: 'HTML & CSS (Bootstrap)', grade: 70},
        { id: 11, type: 'language', name: 'SQL & PL-SQL', grade: 85}
    ];
    return {skills};
  }
}