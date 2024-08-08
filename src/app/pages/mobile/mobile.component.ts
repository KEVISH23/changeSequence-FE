import { Component } from '@angular/core';
import { SectionService } from 'src/app/core/service/section.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  constructor(
    private sectionService: SectionService
  ) { }
  sectionData!: any
  ngOnInit() {
    this.sectionService.itemsSubject.subscribe(x => this.sectionData = x)
  }
}
