import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments = [];

  public IDDepartment;
  public Name;
  public Specialty;
  public AreaPhone;
  public ResponsibleName;
  public ResponsibleUserID;
  public DateOfCreation;

  constructor( private remote:ServiceService ) { }

  ngOnInit(): void {
    this.remote.getDepartment().subscribe((response=>{
      let _response;
      _response = response;
      this.departments = _response;
    }));
  }

  public addDepartment(Name, Specialty, AreaPhone, ResponsibleName, ResponsibleUserID, DateOfCreation){
    let d ={
      "Name":Name,
      "Specialty":Specialty,
      "AreaPhone":AreaPhone,
      "responsible":ResponsibleName,
      "ResponsibleUserID":ResponsibleUserID,
      "DateOfCreation":DateOfCreation,
    }

    this.remote.postDepartment(d).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }

  deleteDepartment(IDDepartment){
    this.remote.deleteDepartment(IDDepartment).subscribe((response=>{
      let _response;
      _response = response;
    }));
  }

  public updateDepartment(IDDepartment, Name, Specialty, AreaPhone, ResponsibleName, ResponsibleUserID, DateOfCreation){
    let d ={
      "IDDepartment":IDDepartment,
      "Name":Name,
      "Specialty":Specialty,
      "AreaPhone":AreaPhone,
      "responsible":ResponsibleName,
      "ResponsibleUserID":ResponsibleUserID,
      "DateOfCreation":DateOfCreation,
    }

    this.remote.putDepartment(d).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }

}
