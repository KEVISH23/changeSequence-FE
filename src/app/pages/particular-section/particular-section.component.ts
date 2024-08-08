import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColDef, RowDragEndEvent } from 'ag-grid-community';
import { ContentService } from 'src/app/core/service/content.service';
import { SectionService } from 'src/app/core/service/section.service';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-particular-section',
  templateUrl: './particular-section.component.html',
  styleUrls: ['./particular-section.component.scss']
})
export class ParticularSectionComponent {
  constructor(
    private contentService: ContentService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private sectionService:SectionService
  ) { }
  rowData = []
  sectionId!: string
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [

    { field: "_id", rowDrag: true },
    { field: "sectionId" },
    { field: "sequence" },
    { field: 'freeBadgeColor' },
    {headerName:"Item",field:"itemDetails.title"},
    { field: "createdAt" },
    { field: "updatedAt" },
  ];
  defaulColDefs: ColDef = {
    flex: 1
  }
  ngOnInit(): void {
    this.sectionId = this.route.snapshot.paramMap.get('id') as string
    this.getData()
  }
  getData() {
    this.contentService.getContent(this.sectionId).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.rowData = res.data
        }
      }
    })
  }
  rowEnded(e: RowDragEndEvent<any, any>) {
    const sequence = e.overIndex + 1
    console.log(sequence)
    const id = e.node.data._id
    this.contentService.changeSequence(id, sequence).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.toastService.showSuccess(res.message)
        } else {
          this.toastService.showError(res.message)
        }
      },
      complete: () => {
        this.getData()
        this.getAllSection()
      }
    })
  }

  getAllSection() {
    this.sectionService.getAllSections().subscribe({
      next: (res: any) => {
        if (res.status) {
          this.sectionService.itemsSubject.next(res.data)
        }
      }
    })
  }
}
