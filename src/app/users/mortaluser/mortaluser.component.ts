import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mortaluser',
  templateUrl: './mortaluser.component.html',
  styleUrls: ['./mortaluser.component.css']
})
export class MortaluserComponent implements OnInit {

  public factories = [];
  public departments = [];
  public employees = [];
  public products;


  constructor( private remote:ServiceService ) { }

  ngOnInit(): void {
    this.remote.getFactories().subscribe((response=>{
      let _response;
      _response = response;
      this.factories = _response;
    }));

    this.remote.getDepartment().subscribe((response=>{
      let _response;
      _response = response;
      this.departments = _response;
    }));

    this.remote.getEmployees().subscribe((response=>{
      let _response;
      _response = response;
      this.employees = _response;
    }));

    this.remote.getProduct().subscribe((response=>{
      let _response;
      _response = response;
      this.products = _response;
    }));

  }

}
