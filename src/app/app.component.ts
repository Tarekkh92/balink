import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomersService } from '../shared/services/customer.service';
import{Customer} from '../shared/models/customer.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'balink';
  
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
public submitForm() {
   
  console.log('firstname: ', this.customer.firstName);
  console.log('lastname data: ', this.customer.lastName);
  console.log('title data: ', this.customer.title);
  console.log('title data: ', this.customer.country);
  console.log('title data: ', this.customer.city);
  console.log('title data: ', this.customer.street);
  console.log('title data: ', this.customer.email);
  console.log('title data: ', this.customer.phone);
  console.log('title data: ', this.customer.option);
  this.ps.addCustomer(this.customer).subscribe(res => {
  
    this.customer = {};
    console.log('res from customer: ', res);
  }, err => {
    console.log('error from customer: ', err)
  })
}


}


