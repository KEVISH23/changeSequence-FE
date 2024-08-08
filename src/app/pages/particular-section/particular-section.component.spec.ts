import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularSectionComponent } from './particular-section.component';

describe('ParticularSectionComponent', () => {
  let component: ParticularSectionComponent;
  let fixture: ComponentFixture<ParticularSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularSectionComponent]
    });
    fixture = TestBed.createComponent(ParticularSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
