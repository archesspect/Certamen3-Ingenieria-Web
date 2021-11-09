import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolitanaScreenComponent } from './metropolitana-screen.component';

describe('MetropolitanaScreenComponent', () => {
  let component: MetropolitanaScreenComponent;
  let fixture: ComponentFixture<MetropolitanaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolitanaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolitanaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
