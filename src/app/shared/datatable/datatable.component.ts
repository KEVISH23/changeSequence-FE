import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @Input() rowData!:any
  @Input() colDefs!:ColDef[]
  @Input() defaulColDefs:ColDef = {
    flex : 1,
    sortable:false,
    editable:true
  }

  @Output() onRowEnd:EventEmitter<any> = new EventEmitter<any>()

  rowEnded(e:any){
    this.onRowEnd.emit(e)
  }
}
