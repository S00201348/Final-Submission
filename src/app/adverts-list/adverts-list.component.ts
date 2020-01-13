import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.css']
})
export class AdvertsListComponent implements OnInit {


  adverts = []

  constructor() {

    var advert1 = {
      title: 'Advert 1',
      city: 'City 1',
      owner: 'Owner 1',
      bedrooms: 2,
      price: 30,
      type: 'Double',
      description: 'Description of Advert 1'
    }

    var advert2 = {
      title: 'Advert 2',
      city: 'City 2',
      owner: 'Owner 2',
      bedrooms: 1,
      price: 20,
      type: 'Single',
      description: 'Description of Advert 2'
    }

    this.adverts = [advert1, advert2]

   }

  ngOnInit() {
  }

}
