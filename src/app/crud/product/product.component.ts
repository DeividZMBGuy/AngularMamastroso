import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products;

  public IDProduct;
  public Name;
  public IDDepartment;

  constructor( private remote:ServiceService ) { }

  ngOnInit(): void {
    this.remote.getProduct().subscribe((response=>{
      let _response;
      _response = response;
      this.products = _response;
    }));
  }

  public addProduct(Name, IDDepartment){
    let p ={
      "Name":Name,
      "IDDepartment":IDDepartment,
    }

    this.remote.postProduct(p).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }

  deleteProduct(IDProduct){
    this.remote.deleteProduct(IDProduct).subscribe((response=>{
      let _response;
      _response = response;
    }));
  }

  public updateProduct(IDProduct, Name, IDDepartment){
    let p ={
      "IDProduct":IDProduct,
      "Name":Name,
      "IDDepartment":IDDepartment,
    }

    this.remote.putProduct(p).subscribe((response => {
      let _response;
      _response = response;
      window.history.back();
    }));
  }


}
