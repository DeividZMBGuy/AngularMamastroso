import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  constructor( private mainService:ServiceService ) { }

  ngOnInit(): void {
  }

  

}
