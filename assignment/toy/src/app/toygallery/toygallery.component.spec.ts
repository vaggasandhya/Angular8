import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToygalleryComponent } from './toygallery.component';

describe('ToygalleryComponent', () => {
  let component: ToygalleryComponent;
  let fixture: ComponentFixture<ToygalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToygalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
