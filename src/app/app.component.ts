import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomersService } from '../shared/services/customer.service';
import{Customer} from '../shared/models/customer.model';
import { StepperSelectionEvent } from '@angular/cdk/stepper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buttonDisabled: Boolean=false;
 
  name = 'balink';
  validate:Boolean=false;
  msg_firstName:string="";
  msg_lastName:string="";
  msg_title:string="";
  msg_country:string="";
  msg_city:string="";
  msg_street:string="";
  msg_email:string="";
  msg_phone:string="";
  msgSuccess: string = "";
  msgError: string = "";
 
  // firstFormGroup: FormGroup | undefined;
  // secondFormGroup: FormGroup | undefined;
  public customer: any = {};

  
   constructor(private _formBuilder: FormBuilder,private ps:CustomersService) {}
  
  ngOnInit() {
   
   
    this.ps.getCustomersAsync().subscribe(res => {
      console.log(res);
    });
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstCtrl: ['', Validators.required]
  //   });
  //   this.secondFormGroup = this._formBuilder.group({
  //     secondCtrl: ['', Validators.required]
  //   });
  // }

}
public firstForm(){
 
  // if(!this.customer.firstName){
  //   this.msg_firstName = " First name is missing !";
  // }
  // if(!this.customer.lastName){
  //   this.msg_lastName = " Last name is missing !  ";
  // }
  // if(!this.customer.title){
  //   this.msg_title = " Title  is missing ! ";
  // }
  
  if(this.customer.firstName!="" && this.customer.lastName !="" && this.customer != ""){
   return true;


  }
  return false;
}

// public firstForm(){
//   if(!this.customer.firstName){
//     this.msg_firstName = " First name is missing !";
//   }
//   if(!this.customer.lastName){
//     this.msg_lastName = " Last name is missing !  ";
//   }
//   if(!this.customer.title){
//     this.msg_title = " Title  is missing ! ";
//   }
//   if(this.customer.firstName!="" && this.customer.lastName !="" && this.customer != ""){
//    this.customer.firstName='';


//   }
  
// }
public submitForm() {
   
  // console.log('firstname: ', this.customer.firstName);
  // console.log('lastname data: ', this.customer.lastName);
  // console.log('title data: ', this.customer.title);
  // console.log('title data: ', this.customer.country);
  // console.log('title data: ', this.customer.city);
  // console.log('title data: ', this.customer.street);
  // console.log('title data: ', this.customer.email);
  // console.log('title data: ', this.customer.phone);
  // console.log('title data: ', this.customer.option);
if(!this.customer.firstName ||  !this.customer.lastName  ||! this.customer.title  ||
  !this.customer.country || !this.customer.city || !this.customer.street || !this.customer.email 
  || !this.customer.phone
    ){
  this.msgError += 'One of the Fields is missing ';
  this.msg_firstName = " First name is missing !";
  this.msg_lastName = " Last name is missing !  ";
  this.msg_title = " Title  is missing ! ";
  this.msg_country = " Country   is missing ! ";
  this.msg_city = " City   is missing ! ";
  this.msg_city = " City is missing ! ";
  this.msg_street = " Street   is missing ! ";
  this.msg_email = " Email   is missing ! ";
  this.msg_phone = " Phone   is missing ! ";
}
else{
  this.ps.addCustomer(this.customer).subscribe(res => {
  
    this.customer = {};
    // console.log('res from customer: ', res);
    this.msgSuccess = 'Success Submission , Thank you For the Time. ';


  }, err => {
    console.log('error from customer: ', err)
    this.msgError = 'Error';
  })
}
  
}


}


