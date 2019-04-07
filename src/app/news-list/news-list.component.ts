import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fon-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  ocene = [7, 8, 9, 5, 7, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
