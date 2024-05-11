import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Swiper
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


// Component

import { Index3Component } from './index3/index3.component';
import { ScrollspyDirective } from '../scrollspy.directive';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LayoutModule } from '../layout/layout.module';





@NgModule({
  declarations: [
 
    Index3Component,
    // ScrollspyDirective
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    LayoutModule,
    SharedModule,
    ScrollToModule.forRoot(),
   
  ]
})
export class PagesModule { }
