import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SectionComponent } from './section/section.component';
import { ParticularSectionComponent } from './particular-section/particular-section.component';
import { SharedModule } from '../shared/shared.module';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    SectionComponent,
    ParticularSectionComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
