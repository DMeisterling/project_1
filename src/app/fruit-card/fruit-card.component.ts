import { Component, Input, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss']
})
export class FruitCardComponent implements OnInit {
  @Input() fruit:string = '';
  @Input() fruitImage:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
