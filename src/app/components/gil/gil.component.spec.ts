import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GilComponent } from './gil.component';

describe('GilComponent', () => {
  let component: GilComponent;
  let fixture: ComponentFixture<GilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
