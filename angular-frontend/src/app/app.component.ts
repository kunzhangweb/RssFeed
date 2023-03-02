import { Component, OnInit } from '@angular/core';

import { FeedService } from './service/feed.service';
import { FeedItem } from './model/feed.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles?: any;

  constructor(private feedService: FeedService) {}

  getArticles(): void {
    this.feedService.getAllFeeds().subscribe({
      next: (data) => {
        const stringifiedData = JSON.stringify(data);
        this.articles = JSON.parse(stringifiedData);
      },
      error: (e) => console.error(e),
    });
  }

  ngOnInit(): void {
    this.getArticles();
  }
  title = 'rss-feed';
}
