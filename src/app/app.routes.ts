import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    { path:'register',component:NewUserComponent},
    {path:'dashboard',component:DashboardComponent},
    { path: '',redirectTo:'login',pathMatch:'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule],
})
export class AppRoutes{
   
}