import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardPhoto: string = "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg";
  
  @Input()
  cardDescription: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum mollitia magni assumenda repellendus temporibus fugiat fuga, a repellat.";
  
  @Input()
  cardDate: string = "14 de setembro";
  
  constructor() { }

  ngOnInit(): void {
  }

}
