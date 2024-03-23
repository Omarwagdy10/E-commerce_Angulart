import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private item : any[] = []
  constructor() { }

  addtoCart(product:any){
    this.item.push({...product ,quantity : 1})
  } 

  

  getitem (){
    return this.item
  }

  delete (item:any){
    this.item = this.item.filter((i)=> i.id !== item.id)
  }

  incrementQuantity (id : number){
    let item = this.item.find((i)=>i.id === id)
    if(item.quantity >= 1){
      item.quantity++;
    }
  
  }

  
  decrementQuantity (id : number){
    let item = this.item.find((i)=>i.id === id)
    if(item.quantity > 1){
      item.quantity--;
    }
  }

  total (id : number){

    return this.item.reduce((acc,item)=>{
      return acc+item.price * item.quantity
    },0)
  }

}
