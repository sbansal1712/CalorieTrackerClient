import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { MatCardModule } from "@angular/material/card";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from "./register/register.component";

import { AppMaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,

    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
