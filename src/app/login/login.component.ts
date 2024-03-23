import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  
  matchdata(){
  
    let returndata : any = localStorage.getItem('userdata')
  
  console.log(JSON.parse(returndata).useremail)
  
  

  }



}
