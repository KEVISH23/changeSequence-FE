import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ActionCellRendererComponent } from './cell-renderer/action-cell-renderer/action-cell-renderer.component';



@NgModule({
  declarations: [
    DatatableComponent,
    ActionCellRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    DatatableComponent
  ]
})
export class SharedModule { }
