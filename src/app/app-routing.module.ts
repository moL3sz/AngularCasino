import { RegistrateComponent } from './registrate/registrate.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent, },
  { path: "index", redirectTo: "" },
  { path: "login", component: LoginComponent },
  { path: "registrate", component: RegistrateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
