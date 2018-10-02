import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './template/experience/experience.component';
import { AboutMeComponent } from './template/about-me/about-me.component';
import { HomeComponent } from './template/home/home.component';
import { NavBarComponent } from './template-parts/nav-bar/nav-bar.component';
import { FooterComponent } from './template-parts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    AboutMeComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
