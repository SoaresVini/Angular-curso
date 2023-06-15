import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainzinComponent } from './mainzin.component';

describe('MainzinComponent', () => {
  let component: MainzinComponent;
  let fixture: ComponentFixture<MainzinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainzinComponent]
    });
    fixture = TestBed.createComponent(MainzinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
