import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AuthenticationService } from './shared/authentication.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { CreateAdvertComponent } from './create-advert/create-advert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { EditAdvertComponent } from './edit-advert/edit-advert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OAuth2Component } from './oauth2.0/oauth2.0.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    AdvertsListComponent,
    CreateAdvertComponent,
    NavbarComponent,
    AdvertDetailsComponent,
    EditAdvertComponent,
    PageNotFoundComponent,
    OAuth2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
