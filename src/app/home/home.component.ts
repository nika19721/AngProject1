import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Categgory, CategoryClass, ProductsClass } from '../Models/Productsmodels';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService, private route:Router){}

  ngOnInit(){
    this.api.GetMethod().subscribe((resp:any)=>{
      this.ProductsArr=resp
      this.AllProducts=resp

    })
  }
  itemAmount=signal(0)



  GetCatergory1(){
    this.api.GetCategories().subscribe((resp:any)=>{
      console.log(resp)
      this.CategoryGet3=resp
    })
  }
  Categoryid2(id:number){
    this.api.GetCategoriesID(id).subscribe((resp:any)=>{
      console.log(resp)
      this.Category4=resp
    })
  }
FilterProductsLocally(id: number) {
  this.ProductsArr = this.AllProducts.filter((product => product.categoryId === id));
}
ReturnToOriginal(){
  this.ProductsArr=this.AllProducts
}
FilterSpiciness(categoryId:number, spiciness:number){
  this.api.GetFilter(categoryId, spiciness).subscribe(resp=>{
    console.log(resp)
  })
}
addToBasket(id:number, price:number){
  if(localStorage.getItem("token") !=null || localStorage.getItem !=undefined){
      let PostObj={
    quantity: 50,
    price: price,
    productId: id
  }
  this.api.AddToCart(PostObj).subscribe(resp=>{
    console.log(resp)
  })
  }
  else{
    this.route.navigateByUrl("/login")
  }
}

    CategoryGet3:Categgory[]=[]
    Category4:CategoryClass[]=[]
    AllProducts:ProductsClass[]=[]
    ProductsArr:ProductsClass[]=[]
    
}
