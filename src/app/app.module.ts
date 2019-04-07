import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsListItemComponent,
    SearchComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
