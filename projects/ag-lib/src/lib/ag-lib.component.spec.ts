import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgLibComponent } from './ag-lib.component';

describe('AgLibComponent', () => {
  let component: AgLibComponent;
  let fixture: ComponentFixture<AgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
