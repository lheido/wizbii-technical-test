import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from '@components/account/account.component';
import { FeedItemComponent } from '@components/feed-item/feed-item.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { PublicationComponent } from '@components/feed-item/publication/publication.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FeedItemComponent,
    DashboardComponent,
    PublicationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
