import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './element/header/header.component';
import { FooterComponent } from './element/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideShowComponent } from './element/slide-show/slide-show.component';

import { SlideshowModule } from 'ng-simple-slideshow';

import { Database } from './database/database';
import { NoticeComponent } from './element/notice/notice.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { ItemListComponent } from './pages/item-list/item-list.component';

const theRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'itemlist', component: ItemListComponent, children: [
      { path: ':id', component: ItemDetailComponent }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideShowComponent,
    NoticeComponent,
    ItemDetailComponent,
    ItemListComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(theRoutes),
    SlideshowModule
  ],
  providers: [Database],
  bootstrap: [AppComponent]
})
export class AppModule { }
