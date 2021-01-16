import { Customer } from "../models/customer.model";
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';


@Injectable({
    providedIn:'root'
})
export class CustomersService {
  
    private customers :Customer[]=[];
    constructor(private http:HttpClient){}

 

    public getCustomersAsync() :Observable<Customer[]>  {

        return this.http.get<Customer[]>(`http://localhost:8080/customers`).pipe(
            map((customers :Customer[]) => customers)
        );
    }
    

    public addCustomer(data: any) {
        return this.http.post(`http://localhost:8080/customers`, data);
    }
    


}