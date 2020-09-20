import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { switchMap, catchError } from "rxjs/operators";
import { of, Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  apiUrl = "https://calorietrackerapp.herokuapp.com/";
  currentUser: any;
  public getLoggedInName = new Subject();
  //apiUrl = "https://ad-management.herokuapp.com/";
  constructor(private http: HttpClient) {}

  getAllAds() {
    return this.http.get(`${this.apiUrl}getAllAds`);
  }
  createNewUser(userdetail: any) {
    return this.http.post(`${this.apiUrl}createNewUser`, userdetail).pipe(
      switchMap((user: any) => {
        //alert("User created successfully");
        return of(user);
      }),
      catchError((ex: any) => {
        console.log(`server error occured`, ex);
        return throwError(`User Creation failed, please contact to admin`);
      })
    );
  }

  signIn(userdetail: any) {
    console.log(userdetail)
    return this.http.post(`${this.apiUrl}signIn`, userdetail)
    
    
  }
 updateMeals(mealDetails : any) {
   console.log(mealDetails)
   return this.http.post(`${this.apiUrl}updateUser`, mealDetails)
 }

}
