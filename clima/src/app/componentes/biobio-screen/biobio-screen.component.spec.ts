import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiobioScreenComponent } from './biobio-screen.component';

describe('BiobioScreenComponent', () => {
  let component: BiobioScreenComponent;
  let fixture: ComponentFixture<BiobioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiobioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiobioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
