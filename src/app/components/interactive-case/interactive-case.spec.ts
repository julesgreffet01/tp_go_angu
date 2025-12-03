import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCase } from './interactive-case';

describe('InteractiveCase', () => {
  let component: InteractiveCase;
  let fixture: ComponentFixture<InteractiveCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
