import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarcompoComponent } from './navbarcompo/navbarcompo.component';
import { SidepanelcompoComponent } from './sidepanelcompo/sidepanelcompo.component';
import { FootercompoComponent } from './footercompo/footercompo.component';
import { LogincompoComponent } from './logincompo/logincompo.component';
import { AdminuserComponent } from './users/adminuser/adminuser.component';
import { MortaluserComponent } from './users/mortaluser/mortaluser.component';
import { FactoryComponent } from './crud/factory/factory.component';
import { DepartmentComponent } from './crud/department/department.component';
import { EmployeesComponent } from './crud/employees/employees.component';
import { ProductComponent } from './crud/product/product.component';
import { WeathercompoComponent } from './weathercompo/weathercompo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarcompoComponent,
    SidepanelcompoComponent,
    FootercompoComponent,
    LogincompoComponent,
    AdminuserComponent,
    MortaluserComponent,
    FactoryComponent,
    DepartmentComponent,
    EmployeesComponent,
    ProductComponent,
    WeathercompoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
