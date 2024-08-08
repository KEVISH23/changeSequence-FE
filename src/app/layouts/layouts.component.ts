import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/core/service/section.service';
@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent {
  constructor(
    private sectionService: SectionService,
    private router:Router
  ) { }
  sectionData!: any
  ngOnInit() {
    this.getData()
    this.sectionService.itemsSubject.subscribe(x => this.sectionData = x)
  }

  getData() {
    this.sectionService.getAllSections().subscribe({
      next: (res: any) => {
        if (res.status) {
          this.sectionService.itemsSubject.next(res.data)
        }
      }
    })
  }

  goToParticularSection(id:string){
    this.router.navigate([`/particular-section/${id}`])
  }
}
