import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedItem } from '../model/feed.model';

const baseUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {} // end constructor

  getAllFeeds(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(baseUrl);
  }
}
