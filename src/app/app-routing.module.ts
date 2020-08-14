import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './../../../practice/src/app/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { UseruiComponent } from './userui/userui.component';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'admin',component:AdminComponent},
  {path:'signup',component:SignupComponent},
  {path:'userui',component:UseruiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
