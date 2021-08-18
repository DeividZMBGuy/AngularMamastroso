import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-logincompo',
  templateUrl: './logincompo.component.html',
  styleUrls: ['./logincompo.component.css']
})
export class LogincompoComponent implements OnInit {

  public username;
  public password;
  public adminpw = "123";
  public adminuser = "Dave";
  public mortaluser = "Shinji"
  public mortalpw = "321"

  constructor( public router:Router, public mainService:ServiceService ) { }

  ngOnInit(): void {
  }

  loginMethod(username, password){
    if (this.username == this.adminuser && this.password == this.adminpw) {
      this.router.navigate(['adminhome']);
      alert('Welcome, boss');
    }
    if(this.username == this.mortaluser && this.password == this.mortalpw) {
      this.router.navigate(['mortalhome']);
      alert('Welcome, mortal');
    }
  }

}
