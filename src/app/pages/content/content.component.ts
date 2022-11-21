import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  NewsTitle: string = "Título"
  NewsDescription: string = "Descrição"
  NewsDate: string = "1 de Janeiro"
  NewsContent: string = "Lorem Ipsum"
  NewsPhoto: string = "https://i.ytimg.com/vi/tS7JeKbpP-A/maxresdefault.jpg"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
