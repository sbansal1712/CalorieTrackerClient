import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  Meals: any = [];
  
  
  constructor(private dataService: DataService, private router : Router, private _snackbar: MatSnackBar) {
    
  }

  ngOnInit() {
    

    
    if(this.dataService.currentUser != undefined){
      this.Meals = this.dataService.currentUser.Meals
     
      if(this.Meals == undefined) {
        this.router.navigate(["/addNewMeal"])
        this.dataService.openSuccessSnackBar("Create your First Meal", "")
        
      }
    }
    else{
      this.dataService.getLoggedInName.next(undefined)
        sessionStorage.clear()
      this.router.navigate(["register"])

    }
    
   

    // this.data.getAllAds().subscribe((data) => {
    //   this.ads = data;
    // });
  }
  goToMealData(i: any) {

  this.dataService.mealIndex = i;
  
   this.router.navigate(["existingmeal"])
  }

 
}
