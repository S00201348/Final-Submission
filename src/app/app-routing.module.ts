import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { CreateAdvertComponent } from './create-advert/create-advert.component';
import { EditAdvertComponent } from './edit-advert/edit-advert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: AdvertsListComponent },
  { path: 'rooms/:id', component: AdvertDetailsComponent },
  { path: 'create-advert', component: CreateAdvertComponent },
  { path: 'advert', component: AdvertDetailsComponent },
  { path: 'edit-advert/:id', component: EditAdvertComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
