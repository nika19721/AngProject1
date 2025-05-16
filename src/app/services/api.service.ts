import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketClass } from '../Models/basketmodels';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  GetMethod(){
   return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
  }
  GetCategories(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetAll`)
  }
  GetCategoriesID(id:number){
   return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }
  AddToCart(PostObj: BasketClass){
   return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, PostObj)
  }
}
