import { Component, OnInit } from '@angular/core';
import { Account, AuthService } from '@services/auth.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeAndScaleAnimation } from '@animations/fade-and-scale.animation';

@Component({
  selector: 'wizbii-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
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
export class AccountComponent implements OnInit {

  public account: Account;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.account = this.authService.account;
  }

}
