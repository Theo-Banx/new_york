import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  server :any = 'http://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';
  currentArticle : any ;

  constructor(private  http: HttpClient) { }

  getData(){
  return    this.http.get(this.server,{params:{'api-key':'HEzJWxevqVkK98HvXxPxEydBKpb0J8LE'}});
  }
}
