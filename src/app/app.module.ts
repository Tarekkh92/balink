import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// import { CustomersService } from '../shared/services/customer.service';
// import{Customer} from '../shared/models/customer.model';
  
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, MatStepperModule, BrowserAnimationsModule,HttpClientModule],
  providers: [ HttpClientModule,  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 



}