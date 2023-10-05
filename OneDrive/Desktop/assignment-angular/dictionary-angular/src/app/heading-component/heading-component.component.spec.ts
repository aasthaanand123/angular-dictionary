import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingComponentComponent } from './heading-component.component';

describe('HeadingComponentComponent', () => {
  let component: HeadingComponentComponent;
  let fixture: ComponentFixture<HeadingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingComponentComponent]
    });
    fixture = TestBed.createComponent(HeadingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
