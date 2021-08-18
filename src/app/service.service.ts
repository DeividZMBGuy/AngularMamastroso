import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  servUrl = 'http://localhost:6661';

  constructor( private http:HttpClient ) { }
  httpConfig = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //CRUD FOR FACTORIES
  public getFactories(){
    return this.http.get(this.servUrl+'/api/factories');
  }

  public postFactories(data){
    return this.http.post(this.servUrl+'/api/factories',data);
  }

  public putFactories(data){
    return this.http.put(this.servUrl+'/api/factories',data);
  }

  public deleteFactories(IDFactory){
    try{
      return this.http.delete(this.servUrl+"/api/factories/"+IDFactory+"");
    }
    catch(ex){
      console.log(ex);
      return ex;
    }
  }
  //END OF CRUD FOR FACTORIES

  //CRUD DEPARTMENT
  public getDepartment(){
    return this.http.get(this.servUrl+'/api/departments');
  }
  public postDepartment(data){
    return this.http.post(this.servUrl+'/api/departments',data);
  }
  public putDepartment(data){
    return this.http.put(this.servUrl+'/api/departments',data);
  }
  public deleteDepartment(IDDepartment){
    try{
      return this.http.delete(this.servUrl+"/api/departments/"+IDDepartment+"");
    }
    catch(ex){
      console.log(ex);
      return ex;
    }
  }
  //FIN CRUD DEPARTMENT

  //CRUD EMPLOYEES
  public getEmployees(){
    return this.http.get(this.servUrl+'/api/employees');
  }
  public postEmployees(data){
    return this.http.post(this.servUrl+'/api/employees',data);
  }
  public putEmployees(data){
    return this.http.put(this.servUrl+'/api/employees',data);
  }
  public deleteEmployees(IDEmployee){
    try{
      return this.http.delete(this.servUrl+"/api/employees/"+IDEmployee+"");
    }
    catch(ex){
      console.log(ex);
      return ex;
    }
  }
  //FIN CRUD EMPLOYEES

  //CRUD PRODUCT
  public getProduct(){
    return this.http.get(this.servUrl+'/api/product');
  }
  public postProduct(data){
    return this.http.post(this.servUrl+'/api/product',data);
  }
  public putProduct(data){
    return this.http.put(this.servUrl+'/api/product',data);
  }
  public deleteProduct(IDProduct){
    try{
      return this.http.delete(this.servUrl+"/api/product/"+IDProduct+"");
    }
    catch(ex){
      console.log(ex);
      return ex;
    }
  }
  //FIN CRUD PRODUCT

  public getToApi(){
    let url = this.servUrl + '/api/users'
    return this.http.get(url);
  }
}
