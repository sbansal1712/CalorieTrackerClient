import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  Meals: any = [];
  
  
  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {

    if(this.dataService.currentUser != undefined){
      this.Meals = this.dataService.currentUser.Meals
    }
    
    console.log(this.Meals)
    // this.data.getAllAds().subscribe((data) => {
    //   this.ads = data;
    // });
  }
  // goToWebsite(ad: any) {
  //   this.data.recordClicks(ad._id).subscribe((data: any) => {
  //     window.open(ad.Website);
  //   });
  
}
