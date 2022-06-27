import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsectionComponent } from './roomsection.component';

describe('RoomsectionComponent', () => {
  let component: RoomsectionComponent;
  let fixture: ComponentFixture<RoomsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
