import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageSecoundChildComponent } from './first-page-secound-child.component';

describe('FirstPageSecoundChildComponent', () => {
  let component: FirstPageSecoundChildComponent;
  let fixture: ComponentFixture<FirstPageSecoundChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageSecoundChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageSecoundChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
