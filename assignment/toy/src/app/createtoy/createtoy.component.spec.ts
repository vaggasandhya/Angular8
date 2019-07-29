import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetoyComponent } from './createtoy.component';

describe('CreatetoyComponent', () => {
  let component: CreatetoyComponent;
  let fixture: ComponentFixture<CreatetoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
