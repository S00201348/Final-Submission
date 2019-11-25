import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {

  title: String;
  city: String;
  owner: String;
  bedrooms: number;
  price: String;
  type: String;
  description: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submit calls");
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedroomms: this.bedrooms,
      price: this.price,
      type: this.type,
      description: this.description
    };

  }

}
