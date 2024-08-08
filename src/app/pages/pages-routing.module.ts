import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { ParticularSectionComponent } from './particular-section/particular-section.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'section',
    pathMatch:"full"
  },
  {
    path:'section',
    component:SectionComponent
  },
  {
    path:'particular-section/:id',
    component:ParticularSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
