import { Component, OnDestroy } from '@angular/core';
import { Account, AuthService } from '@services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wizbii-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public account: Account;

  private authSubscriber: Subscription;

  constructor(private authService: AuthService) {
    this.authSubscriber = this.authService.doLogin().subscribe(() => {
      this.account = this.authService.account;
    });
  }

  ngOnDestroy(): void {
    this.authSubscriber.unsubscribe();
  }
}
