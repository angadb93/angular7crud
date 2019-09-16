import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Observable<Iproduct[]> = null;

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getAllProduct();
    console.log(this.products);
  }

  deleteProduct(product): void{
    // console.log(product)
    this.productService.deleteProduct(product);
  }

  viewProduct(product): void {
    console.log(product)
    this.router.navigate(['products/view/'+product.id]);
  }

}
