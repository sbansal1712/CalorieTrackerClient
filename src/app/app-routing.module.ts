import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddNewMealComponent } from "./addNewMeal/addNewMeal.component";

import { RegisterComponent } from "./register/register.component";
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: "", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "addNewMeal", component: AddNewMealComponent },
  { path: "existingmeal", component: AddNewMealComponent },
  { path: "register", component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
