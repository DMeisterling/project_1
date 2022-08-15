import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  fruitNames = [
    'Zitrone',
    'Himbeere',
    'Pfirsich',
    'Ananas'
  ]
  fruitImages = [
    'assets/img/fruits/5.jpg',
    'assets/img/fruits/6.jpg',
    'assets/img/fruits/7.jpg',
    'assets/img/fruits/8.jpg'
  ]
  fruitTexte = [
    'Die Zitrone kann sehr sauer sein.',
    'Die Himbeere schmeckt sehr gut.',
    'Der Pfirsich ist süß.',
    'Die Ananas schaut lustig aus.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
