import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = "http://via.placeholder.com/320x150";

  constructor() { }

  ngOnInit() {
    

    this.products.push(new Product(66, '第六个商品', 5.99, 2.5, '这是第六个商品，Angular实战', ['电子产品', '硬件设备']));
  }

}
