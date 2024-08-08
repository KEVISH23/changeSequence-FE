import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, RowDragEndEvent } from 'ag-grid-community';
import { SectionService } from 'src/app/core/service/section.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { ActionCellRendererComponent } from 'src/app/shared/cell-renderer/action-cell-renderer/action-cell-renderer.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  constructor(
    private sectionService: SectionService,
    private toastService: ToastService,
    private router: Router
  ) { }
  rowData = []

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      field: "Action", cellRenderer: ActionCellRendererComponent, rowDrag: true, cellRendererParams: {
        onEdit: (id: string) => this.onEditEvent(id),
        onDelete:(id:string) => this.onDeleteEvent(id)
      },flex:2
    },
    { field: "_id" },
    {headerName:"section name", field: "sectionName" },
    { headerName:"sequence", field: "sequence" },
    {headerName:"createdAt", field: "createdAt" ,valueFormatter:(p)=>p.value.toString().slice(0,10)},
    { headerName:"updatedAt",field: "updatedAt",valueFormatter:(p)=>p.value.toString().slice(0,10) },
  ];
  defaulColDefs: ColDef = {
    flex: 1
  }
  ngOnInit(): void {
    this.getData()
  }
  onEditEvent(id: string) {
    this.router.navigate([`/particular-section/${id}`])
  }
  onDeleteEvent(id: string) {
    this.sectionService.deleteSection(id).subscribe({
      next:(res:any)=>{
        if(res.status){
          this.toastService.showSuccess(res.message)
          this.getData()
        }else{
          this.toastService.showError(res.message)
        }
      }
    })
  }
  getData() {
    this.sectionService.getAllSections().subscribe({
      next: (res: any) => {
        if (res.status) {
          this.rowData = res.data
          this.sectionService.itemsSubject.next(res.data)
        }
      }
    })
  }
  rowEnded(e: RowDragEndEvent<any, any>) {
    const sequence = e.overIndex + 1
    const id = e.node.data._id

    this.sectionService.changeSequence(id, sequence).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.toastService.showSuccess(res.message)
        } else {
          this.toastService.showError(res.message)
        }
      },
      complete: () => {
        this.getData()
      }
    })
  }
}