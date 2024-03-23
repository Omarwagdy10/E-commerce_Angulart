import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  userform: FormGroup;
  constructor() {
    this.userform = new FormGroup({
      userName: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required,
      ]),
      Email: new FormControl('', [
        Validators.email,
        Validators.minLength(7),
        Validators.required,
      ]),
      Password: new FormControl('', [
        // Validators.minLength(6),
        Validators.pattern('^[a-zA-Z0-9@!#$%^&*()-_=+]{6,}$'),
        Validators.required,
      ]),
      Address: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      // Gender: new FormControl('', [Validators.required]),
    });
  }

  handelSubmit() {
    console.log(this.userform);
  }

  savedata() {
    let userdata: any = {
      useremail: this.userform.controls['Email'].value,
      userpassword: this.userform.controls['Password'].value,
    };
    localStorage.setItem('userdata',JSON.stringify(userdata))
  }
}
