import { Component, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Categgory, CategoryClass, ProductsClass } from '../Models/Productsmodels';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService, private route:Router){}
      CategoryGet3:Categgory[]=[]
    Category4:CategoryClass[]=[]
    AllProducts:ProductsClass[]=[]
    ProductsArr:ProductsClass[]=[]

  ngOnInit(){
    this.api.GetMethod().subscribe((resp:any)=>{
      this.ProductsArr=resp
      this.AllProducts=resp

    })
  }
  itemAmount=signal(0)

  rangeValue: number = 0
  isNuts: boolean = false
  vegetarian: boolean = false
  spiciness: number = 0



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
filter(){
  let filterObj: any = {
    vegeterian: this.vegetarian,
    nuts: this.isNuts,
    spiciness: this.rangeValue
  }
 
  this.api.getFiltered(filterObj).subscribe((resp2: any) => {
    console.log(resp2)
    this.ProductsArr = resp2
  })
}
showFilter:boolean=false
filterShow(){
  this.showFilter=!this.showFilter
}
reset(){
  this.vegetarian = false
  this.isNuts = false
  this.rangeValue = 0

  this.filter()

  this.api.GetMethod().subscribe((resp : any) =>{
    console.log(resp)
    this.ProductsArr= resp
  })
}
addToBasket(id:number, price:number){
  if(localStorage.getItem("token") !=null || localStorage.getItem("token") !=undefined){
    let PostObj={
    quantity: 50,
    price: price,
    productId: id
  }
  this.api.AddToCart(PostObj).subscribe(resp=>{
    console.log(resp)
  })
  Swal.fire({
  title: "Added to basket",
  icon: "success",
  draggable: true
});
  }
  else{
    this.route.navigateByUrl("/login")
  }
}



    
}
