import { CartService } from './../service/cart.service';
import { CommonModule } from '@angular/common';
import {  Input, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css',
})
export class ProductDataComponent {
  @Input() prod_data: any;

  constructor(private router: Router) {}

  Redirection(Game_id: string) {
    this.router.navigate([`/details/${Game_id}`]);
  }
  // product:any
  CartService = inject(CartService)

  addtocart(product:any){
    this.CartService.addtoCart(product)
    
  }


}
