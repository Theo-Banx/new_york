import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  server :any = 'http://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';

  constructor(private  newsService: NewsService, private route:Router) {}

    articles : any ;

  ngOnInit(){

   this.newsService.getData().subscribe(res=>{
      console.log(res['results']);
      this.articles = res['results'] ;
    });
  }


  viewSingleArticle(article){
      console.log(article);
      this.newsService.currentArticle = article ;
      this.route.navigate(['/single']);
      
  }

}
