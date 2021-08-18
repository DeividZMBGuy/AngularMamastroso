import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  public factories = [];

  public IDFactory;
  public OfficialName;
  public ComercialName;
  public RFC;
  public Address;
  public Telephone;
  public DateOfCreation;
  public Director;


  constructor( private remote:ServiceService ) { }

  ngOnInit(): void {
    this.remote.getFactories().subscribe((response=>{
      let _response;
      _response = response;
      this.factories = _response;
    }));
  }

  public addFactory(OfficialName, ComercialName, RFC, Address, Telephone, DateOfCreation, Director){
    let f ={
      "OfficialName":OfficialName,
      "ComercialName":ComercialName,
      "RFC":RFC,
      "Address":Address,
      "Telephone":Telephone,
      "DateOfCreation":DateOfCreation,
      "Director":Director
    }

    this.remote.postFactories(f).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }

  deleteFactory(IDFactory){
    this.remote.deleteFactories(IDFactory).subscribe((response=>{
      let _response;
      _response = response;
    }));
  }

  public updateFactory(IDFactory, OfficialName, ComercialName, RFC, Address, Telephone, DateOfCreation, Director){
    let f ={
      "IDFactory":IDFactory,
      "OfficialName":OfficialName,
      "ComercialName":ComercialName,
      "RFC":RFC,
      "Address":Address,
      "Telephone":Telephone,
      "DateOfCreation":DateOfCreation,
      "Director":Director
    }

    this.remote.putFactories(f).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }

}
