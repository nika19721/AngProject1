import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Categgory, CategoryClass, ProductsClass } from '../Models/Productsmodels';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.GetMethod().subscribe((resp:any)=>{
      console.log(resp)
      this.ProductsArr=resp
      this.AllProducts=resp
    })
  }
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
  this.ProductsArr = this.AllProducts.filter(product => product.categoryId === id);
}
ReturnToOriginal(){
  this.ProductsArr=this.AllProducts
}


    CategoryGet3:Categgory[]=[]
    Category4:CategoryClass[]=[]
    AllProducts:ProductsClass[]=[]
    ProductsArr:ProductsClass[]=[]
}
