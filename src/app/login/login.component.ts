import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private api:ApiService){}


  phoneNumber=""
  password=""

 Login(){
  let postObj = {
    phoneNumber:this.phoneNumber,
    password:this.password,
    email:"",
    firstName:"",
    lastName:"",
    role:""
  }

  this.api.Login(postObj).subscribe((resp : any) =>{
    console.log(resp.token)
    localStorage.setItem("token", resp.token)
  })
 }
}
