import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundPageFirstChildComponent } from './secound-page-first-child.component';

describe('SecoundPageFirstChildComponent', () => {
  let component: SecoundPageFirstChildComponent;
  let fixture: ComponentFixture<SecoundPageFirstChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundPageFirstChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundPageFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
