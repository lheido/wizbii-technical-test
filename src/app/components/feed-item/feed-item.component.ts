import { Component, Input, OnInit } from '@angular/core';
import { FeedItem, WizbiiService } from '@services/wizbii.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeAndScaleAnimation } from '@animations/fade-and-scale.animation';

@Component({
  selector: 'wizbii-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        useAnimation(fadeAndScaleAnimation, {
          params: {
            timings: '500ms'
          }
        })
      ])
    ])
  ]
})
export class FeedItemComponent implements OnInit {

  @Input() feedItemId: string;

  public feedItem: FeedItem;

  constructor(private wizbiiService: WizbiiService) {
  }

  ngOnInit() {
    this.feedItem = this.wizbiiService.getFeedItem(this.feedItemId);
  }

}
