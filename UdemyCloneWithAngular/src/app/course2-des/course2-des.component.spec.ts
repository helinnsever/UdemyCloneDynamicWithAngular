import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2DesComponent } from './course2-des.component';

describe('Course2DesComponent', () => {
  let component: Course2DesComponent;
  let fixture: ComponentFixture<Course2DesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2DesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Course2DesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
