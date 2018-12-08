import { Component, OnInit } from '@angular/core';
import { Account, AuthService } from '@services/auth.service';

@Component({
  selector: 'wizbii-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public account: Account;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.account = this.authService.account;
  }

}
