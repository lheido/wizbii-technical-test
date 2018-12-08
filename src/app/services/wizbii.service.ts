import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '@environments/environment';
import { AuthService } from '@services/auth.service';

export interface FeedItem {
  id: string;
  type: string;
}

export interface FeedItemProxy {
  id: string;
  type: string;
  position: number;
}

export interface Dashboard {
  feed_items: { feed_items: FeedItem[] };
  display_recipe: { feed_item_proxies: FeedItemProxy[] };
}

@Injectable({
  providedIn: 'root'
})
export class WizbiiService {

  public dashboard: Dashboard;

  private dashboard$: Subject<Dashboard>;
  private feedItems: Map<string, FeedItem>;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.dashboard$ = new Subject();
    this.feedItems = new Map<string, FeedItem>();
  }

  getDashboard(direction = 'newest') {
    this.httpClient.post<Dashboard>(`${environment.apiBase}/v2/dashboard/`, {}, {
      params: new HttpParams().set('direction', direction),
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.account['access-token']}`
      })
    }).subscribe((dashboard: Dashboard) => {
      this.dashboard = dashboard;

      if (dashboard.feed_items.feed_items) {
        dashboard.feed_items.feed_items.forEach((feedItem: FeedItem) => {
          this.feedItems.set(feedItem.id, feedItem);
        });
      }

      this.dashboard$.next(dashboard);
    });
    return this.dashboard$.asObservable();
  }

  getFeedItem(id): FeedItem | null {
    if (this.feedItems.has(id)) {
      return this.feedItems.get(id);
    }
    return null;
  }
}
