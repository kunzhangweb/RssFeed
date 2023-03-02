import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() date: string = '';

  constructor() {}

  get articleDate() {
    return new Date(this.date);
  }
}
