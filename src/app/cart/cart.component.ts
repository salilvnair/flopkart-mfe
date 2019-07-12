import { Component, OnInit } from '@angular/core';
import { NgxElement } from '@salilvnair/ngx-element-util';
import { HomeService } from '../home/home.service';
import { Product } from '../home/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource:Product[] = [];
  constructor(
    private homeService: HomeService,
    private ngxElement: NgxElement
  ) { }

  ngOnInit() {
    this.dataSource = this.homeService.retriveCartData();
    console.log(this.dataSource);

    this.ngxElement.selector('flopkart-cart').attr('dataSource',this.dataSource);
  }

}
