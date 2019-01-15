import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServinglocationComponent } from './servinglocation.component';

describe('ServinglocationComponent', () => {
  let component: ServinglocationComponent;
  let fixture: ComponentFixture<ServinglocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServinglocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServinglocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
