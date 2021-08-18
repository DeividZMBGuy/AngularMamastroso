import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees = [];

  public IDEmployee;
  public Name;
  public Address;
  public DateOfHiring;
  public IDDepartment; 

  constructor( private remote:ServiceService ) { }

  ngOnInit(): void {
    this.remote.getEmployees().subscribe((response=>{
      let _response;
      _response = response;
      this.employees = _response;
    }));
  }

  public addEmployee(Name, Address, DateOfHiring, IDDepartment){
    let e ={
      "Name":Name,
      "Address":Address,
      "DateOfHiring":DateOfHiring,
      "IDDepartment":IDDepartment,
    }

    this.remote.postEmployees(e).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }

  deleteEmployee(IDEmployee){
    this.remote.deleteEmployees(IDEmployee).subscribe((response=>{
      let _response;
      _response = response;
    }));
  }

  public updateEmployee(IDEmployee, Name, Address, DateOfHiring, IDDepartment){
    let e ={
      "IDEmployee":IDEmployee,
      "Name":Name,
      "Address":Address,
      "DateOfHiring":DateOfHiring,
      "IDDepartment":IDDepartment,
    }

    this.remote.putEmployees(e).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }
}
