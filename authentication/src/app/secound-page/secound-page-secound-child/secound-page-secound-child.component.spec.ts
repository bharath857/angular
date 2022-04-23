import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundPageSecoundChildComponent } from './secound-page-secound-child.component';

describe('SecoundPageSecoundChildComponent', () => {
  let component: SecoundPageSecoundChildComponent;
  let fixture: ComponentFixture<SecoundPageSecoundChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundPageSecoundChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundPageSecoundChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
