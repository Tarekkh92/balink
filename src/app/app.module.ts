import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
  
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
  
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, MatStepperModule, BrowserAnimationsModule ,],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }