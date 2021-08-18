import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './crud/department/department.component';
import { EmployeesComponent } from './crud/employees/employees.component';
import { FactoryComponent } from './crud/factory/factory.component';
import { ProductComponent } from './crud/product/product.component';
import { LogincompoComponent } from './logincompo/logincompo.component';
import { AdminuserComponent } from './users/adminuser/adminuser.component';
import { MortaluserComponent } from './users/mortaluser/mortaluser.component';

const routes: Routes = [
  {path:'', component:LogincompoComponent, pathMatch:'full'},
  {path:'adminhome', component:AdminuserComponent, pathMatch:'full'},
  {path:'mortalhome', component:MortaluserComponent, pathMatch:'full'},
  {path:'factory', component:FactoryComponent, pathMatch:'full'},
  {path:'department', component:DepartmentComponent, pathMatch:'full'},
  {path:'employee', component:EmployeesComponent, pathMatch:'full'},
  {path:'product', component:ProductComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
