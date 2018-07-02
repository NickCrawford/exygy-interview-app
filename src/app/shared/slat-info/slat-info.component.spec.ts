import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlatInfoComponent } from './slat-info.component';

describe('SlatInfoComponent', () => {
  let component: SlatInfoComponent;
  let fixture: ComponentFixture<SlatInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlatInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
