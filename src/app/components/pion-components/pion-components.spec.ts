import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PionComponents } from './pion-components';

describe('PionComponents', () => {
  let component: PionComponents;
  let fixture: ComponentFixture<PionComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PionComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PionComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
