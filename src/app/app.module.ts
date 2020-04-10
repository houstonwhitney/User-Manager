import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AffichageComponent } from './affichage/affichage.component';
import { Routes, RouterModule } from "@angular/router";
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './section/article/article.component';
import { AsideComponent } from './section/aside/aside.component';

const appRoutes: Routes = [
  { path: 'gest1', component: SectionComponent },
  { path: 'gest2', component: AffichageComponent },
  { path: 'gest3', component: ConnexionComponent },
  { path: '', component: SectionComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    ArticleComponent,
    AsideComponent,
    AffichageComponent,
    ConnexionComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
