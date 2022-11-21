import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  cardPhoto: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  id: string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
