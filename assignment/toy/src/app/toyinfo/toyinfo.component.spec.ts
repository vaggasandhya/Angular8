import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyinfoComponent } from './toyinfo.component';

describe('ToyinfoComponent', () => {
  let component: ToyinfoComponent;
  let fixture: ComponentFixture<ToyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
