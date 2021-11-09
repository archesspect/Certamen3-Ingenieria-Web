import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraucaniaScreenComponent } from './araucania-screen.component';

describe('AraucaniaScreenComponent', () => {
  let component: AraucaniaScreenComponent;
  let fixture: ComponentFixture<AraucaniaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AraucaniaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AraucaniaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
