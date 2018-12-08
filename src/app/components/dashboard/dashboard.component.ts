import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { animateChild, query, stagger, transition, trigger } from '@angular/animations';

import { Dashboard, FeedItemProxy, WizbiiService } from '@services/wizbii.service';

@Component({
  selector: 'wizbii-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          stagger('150ms', [
            query('@*', animateChild(), {optional: true})
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  public feedItems: FeedItemProxy[];

  private dashboardSubscriber: Subscription;

  constructor(private wizbiiService: WizbiiService) {
  }

  ngOnInit() {
    this.feedItems = [];
    this.dashboardSubscriber = this.wizbiiService.getDashboard().subscribe((dashboard: Dashboard) => {
      // Use display_recipe to display feed items in the order given by the back-end.
      this.feedItems = dashboard.display_recipe.feed_item_proxies || [];
    });
  }

  ngOnDestroy(): void {
    this.dashboardSubscriber.unsubscribe();
  }

}
