import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Daniels Auffrischprojekt';
  fruitImages = [
    'assets/img/fruits/2.jpg',
    'assets/img/fruits/1.jpg',
    'assets/img/fruits/3.jpg',
    'assets/img/fruits/4.jpg'
  ]
  fruitTexte = [
    'Die Erdbeere ist eine leckere, rote Frucht.',
    'Die Wassermelone ist eine wässrige Frucht.',
    'Die Banane ist eine süße Frucht.',
    'Die Birne ist eine Birne.'
  ]

  buttonClicked() {
    alert("Alert");
  }
}
