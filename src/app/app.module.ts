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
import { ItemDetailComponent } from './pages/item-list/item-detail/item-detail.component';
import { ItemListComponent } from './pages/item-list/item-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadDetailsService } from './service/load-details.service';

const theRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'itemlist', component:ItemListComponent},
  { path: 'itemlist/item/:id', component: ItemDetailComponent },
  

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
    SlideshowModule,
    BrowserAnimationsModule
  ],
  providers: [Database, LoadDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
