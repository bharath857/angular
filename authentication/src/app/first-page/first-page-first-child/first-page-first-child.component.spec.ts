import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageFirstChildComponent } from './first-page-first-child.component';

describe('FirstPageFirstChildComponent', () => {
  let component: FirstPageFirstChildComponent;
  let fixture: ComponentFixture<FirstPageFirstChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageFirstChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
