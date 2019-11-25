import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-advert',
  templateUrl: './edit-advert.component.html',
  styleUrls: ['./edit-advert.component.css']
})
export class EditAdvertComponent implements OnInit {

  id;
  title;
  city;
  bedrooms;
  owner;
  price;
  type;
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
  }
  onSubmit() {
    let listing = {
      title: this.title,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      city: this.city,
      type: this.type
    };

    this.router.navigate(['/']);
  }

}
