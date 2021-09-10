import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {

  constructor(private newsService: NewsService) { }
  article ;
  ngOnInit() {
    this.article = this.newsService.currentArticle;
    
  }

}
