import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket',
  imports: [RouterModule, CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  constructor(private api:ApiService){}
  ngOnInit(){
    this.api.GetBasket().subscribe((resp:any)=>{
      console.log(resp)
      this.getBasketts=resp
    })
  }
  itemAmount=signal(0)
    Increase(amount:number, id:number, price:number){
    this.itemAmount.set(amount+1)
    console.log(this.itemAmount)
    this.api.UpdateBasket({
      quantity:this.itemAmount,
      price:price,
      ProductId:id
    }).subscribe(resp=>console.log(resp))
  }
    Decrease(amount:number, id:number, price:number){
    this.itemAmount.set(amount+1)
    console.log(this.itemAmount)
    this.api.UpdateBasket({
      quantity:this.itemAmount,
      price:price,
      ProductId:id
    }).subscribe(resp=>console.log(resp))
  }
    getBasketts:any
 deletebasket(id: number) {
  this.api.DeleteCart(id).subscribe(resp => {
    console.log(resp)
    this.api.GetBasket().subscribe(resp => {
      this.getBasketts = resp;
    });
  });
}

}
