import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component

import { Index3Component } from './index3/index3.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';


const routes: Routes = [
  
  {
    path:'',
    component:Index3Component
  },
  {
    path:'aboutUs-details',
    component:BlogdetailsComponent
  },
 
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
