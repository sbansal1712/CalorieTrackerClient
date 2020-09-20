import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit  {
  datesubmitted: boolean;
  dateSubmitted: boolean;
  totalCalorie: any;
  currentUser: any;


  
  constructor( private formBuilder: FormBuilder, private dataService : DataService, private router : Router){
    
      this.currentUser = this.dataService.currentUser
      //return this.dataService.currentUser
  
    
  }
  mealForm: FormGroup;
  submitForm : FormGroup;
  mealSubmitted: boolean;

  ngOnInit(){
    this.getTransactionData()
    this.mealForm = this.formBuilder.group({
      MealName: ["", Validators.required],
      Calories: ["", Validators.required],
     
    });
    this.submitForm = this.formBuilder.group({
      Date: ["", Validators.required],
     
    });
  }
  displayedColumns: string[] = ['item', 'calorie', 'action'];
  
  transactions: any[] = [
  
     
    
  ];
  dataSource = new MatTableDataSource<Element>(this.transactions);


  /** Gets the total calorie of all transactions. */
  getTotalcalorie() {
    this.totalCalorie = this.transactions.map(t => t.calorie).reduce((acc, value) => acc + value, 0);
    return this.totalCalorie
  }
  delete(i){
    this.transactions.splice(i,1);
    console.log(this.transactions)
    this.dataSource = new MatTableDataSource<Element>(this.transactions);
    
  }
  savedata(){
    this.dateSubmitted = true;
    if(this.submitForm.invalid || this.transactions.length == 0){
      return;
    }
    else{
      const newMeal = {
        Date : this.submitForm.get("Date").value,
        totalCalorie : this.totalCalorie,
        Meals : this.transactions
      }
      if(this.currentUser.Meals == undefined){
        this.currentUser.Meals = []
      }
      this.currentUser.Meals.push(newMeal),
      
      this.dataService.updateMeals({
        Username : this.currentUser.Username,
        Meals : this.currentUser.Meals

      }).subscribe((data : any) => {
        this.router.navigate(["/home"])
      } )
      
    }
  }

  submitMeal(){
    this.mealSubmitted = true;

    if (this.mealForm.invalid) {
      return;
    } else {
      const mealdetail = {
        item: this.mealForm.get("MealName").value,
       
        calorie: this.mealForm.get("Calories").value,
     
        
      };
      this.transactions.push(mealdetail)
      this.mealForm.reset()
      this.mealSubmitted = false;
      
      this.dataSource = new MatTableDataSource<Element>(this.transactions);


      // this.dataService.createNewUser(userdetail).subscribe((data: any) => {
      //   this.loggedInUser = data;
        
      //  // this.router.navigate(["/home"]);
      // });
    }
    //this.registrationsuccess = true;
  }
  getTransactionData(){
    
  }
}
