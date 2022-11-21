import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  NewsTitle: string = ""
  NewsDescription: string = ""
  NewsDate: string = ""
  NewsContent: string = ""
  NewsPhoto: string = ""
  private id: string | null  = ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToContent(this.id as string);
  }

  setValuesToContent(id: string) {
    const result = DataFake.filter(article => article.id == this.id as string)[0]
    console.log(result);
    this.NewsTitle = result.title;
    this.NewsDescription = result.description;
    this.NewsDate = result.date;
    this.NewsContent = result.content;
    this.NewsPhoto = result.photo;
  }
}
