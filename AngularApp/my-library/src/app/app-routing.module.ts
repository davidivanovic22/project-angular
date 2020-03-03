import { BookHomeComponent } from './../book-home/book-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddCartComponent } from 'src/book-home/book-add-cart/book-add-cart.component';
import { LoginComponent } from 'src/login/login.component';
import { RegisterComponent } from 'src/register/register.component';
import { AuthGuard } from './module/auth.guard';


const routes: Routes = [
  { path: '', component: BookHomeComponent,canActivate: [AuthGuard] },
  { path: 'book-add-cart', component: BookAddCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = RouterModule.forRoot(routes);
