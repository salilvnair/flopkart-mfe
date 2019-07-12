import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from './product.model';
import { NgxElement } from '@salilvnair/ngx-element-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource:Product[] = [];
  constructor(
    private homeService: HomeService,
    private ngxElement: NgxElement
    ) { }

  ngOnInit() {
    this.homeService.loadProducts().subscribe(data=>{
      this.dataSource = data
      this.ngxElement.selector('flopkart-home').attr('dataSource',this.dataSource);
    })
    this.ngxElement.selector('flopkart-home').on('addToCartEvent',(data)=>{
      this.homeService.addToCart(data);
    })
  }

}
