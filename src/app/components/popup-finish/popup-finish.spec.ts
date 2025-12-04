import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFinish } from './popup-finish';

describe('PopupFinish', () => {
  let component: PopupFinish;
  let fixture: ComponentFixture<PopupFinish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupFinish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFinish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
