import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  main = "./assets/main2.jpg";
  pjt1 = "./assets/a1.jpg";
  pjt2 = "./assets/a2.jpg";
  pjt21 = "./assets/a2-1.jpg";
  pjt3 = "./assets/a3.jpg";
  pjt4 = "./assets/a4.jpg";
  pjt5 = "./assets/a5.jpg";
  pjt6 = "./assets/a6.jpg";
  

  clicked(): void {
    alert("It will be added.");
  }
}
