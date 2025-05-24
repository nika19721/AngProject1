import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketClass } from '../Models/basketmodels';
import { RegistrationClass } from '../Models/Productsmodels';

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
  GetBasket(){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Baskets/GetAll`)
  }
  getFiltered(filterObj : any){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${filterObj.vegeterian}&nuts=${filterObj.nuts}&spiciness=${filterObj.spiciness}`)
  }
  AddToCart(PostObj: BasketClass){
   return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/AddToBasket`, PostObj)
  }
  UpdateBasket(Post :any){
   return this.http.post(`https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket`, Post)
  }
  DeleteCart(id:number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
  Registration(Post:RegistrationClass){
    return this.http.post(`https://rentcar.stepprojects.ge/api/Users/register`, Post)
  }
  Login(Post:any){
    return this.http.post(`https://rentcar.stepprojects.ge/api/Users/login`, Post)
  }
}
