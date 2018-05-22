import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './element/header/header.component';
import { FooterComponent } from './element/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideShowComponent } from './element/slide-show/slide-show.component';

import {SlideshowModule} from 'ng-simple-slideshow';


const theRoutes: Routes = [
  {path:'home', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideShowComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(theRoutes),
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
