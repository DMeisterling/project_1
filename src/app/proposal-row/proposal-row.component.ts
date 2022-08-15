import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-row',
  templateUrl: './proposal-row.component.html',
  styleUrls: ['./proposal-row.component.scss']
})
export class ProposalRowComponent implements OnInit {
  @Input() fruitName = 'DMeisterling';
  @Input() fruitImage = 'assets/img/gorilla.jpg';
  @Input() fruitText = 'Ausloggen';

  constructor() { }

  ngOnInit(): void {
  }

}
