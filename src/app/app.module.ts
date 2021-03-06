import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './template/experience/experience.component';
import { AboutMeComponent } from './template/about-me/about-me.component';
import { HomeComponent } from './template/home/home.component';
import { NavBarComponent } from './template-parts/nav-bar/nav-bar.component';
import { FooterComponent } from './template-parts/footer/footer.component';
import { HeaderComponent } from './template-parts/header/header.component';
import { TaskHistoryComponent } from './template/task-history/task-history.component';
import { PortfolioComponent } from './template/portfolio/portfolio.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'taskhistory', component: TaskHistoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    AboutMeComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    TaskHistoryComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
