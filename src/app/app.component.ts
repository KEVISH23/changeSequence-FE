import { Component, OnInit } from '@angular/core';
import { ColDef, RowDragEndEvent } from 'ag-grid-community';
import { SectionService } from './core/service/section.service';
import { ToastService } from './core/service/toast.service';
import { ActionCellRendererComponent } from './shared/cell-renderer/action-cell-renderer/action-cell-renderer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
 
}
