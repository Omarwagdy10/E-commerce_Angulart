import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

{
    path: "" ,
    component :ProductListComponent,
    title : "Game_Center"
},
{
    path: "details/:Game_id" ,
    component :DetailsComponent,
    title : "Details"

},
{
    path: "contact-us" ,
    component :ContactUsComponent,
    title : "Contact_Us"

},
{
    path: "cart" ,
    component :CartComponent,
    title : "Contact_Us"

},
{
    path: "signin" ,
    component :SigninComponent,
    title : "signin"

},
{
    path: "login" ,
    component :LoginComponent,
    title : "login"

},

{
    path: "profile" ,
    component :ProfileComponent,
    title : "Profile"

},
{
    path: "**" ,
    component :NotfoundComponent,
    title : "Not Founded Page"

},


];
