import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basket',
  imports: [RouterModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  constructor(private api:ApiService){}
  AddToBasket(price:number, id:number){
    let PostObj={
    quantity: 1,
    price: price,
    productId: id,
}

  this.api.AddToCart(PostObj).subscribe((resp:any)=>{
    console.log(resp)
  })
  }
}
