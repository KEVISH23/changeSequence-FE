import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CellRendererComponent } from 'ag-grid-community/dist/types/core/components/framework/componentTypes';

@Component({
  selector: 'app-action-cell-renderer',
  templateUrl: './action-cell-renderer.component.html',
  styleUrls: ['./action-cell-renderer.component.scss']
})
export class ActionCellRendererComponent implements ICellRendererAngularComp {
  params:any
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }

  onEdit(){
    this.params.onEdit(this.params.data._id)
  }

  onDelete(){
    this.params.onDelete(this.params.data._id)
  }
}
