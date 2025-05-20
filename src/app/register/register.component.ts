import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private api:ApiService){}


  phoneNumber=""
  password=""

    register(){
    this.api.Registration({
      phoneNumber:this.phoneNumber,
      password:this.password,
      email:"",
      firstName:"",
      lastName:"",
      role:""
    }).subscribe(resp=>{
      console.log(resp)
    })
  }
}
