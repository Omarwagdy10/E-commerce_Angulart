import { CartService } from './../service/cart.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  CartService = inject(CartService)

  delete(item:any){
    this.CartService.delete(item)
   }

}
