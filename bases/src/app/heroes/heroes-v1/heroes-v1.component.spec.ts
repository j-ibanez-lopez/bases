import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesV1Component } from './heroes-v1.component';

describe('HeroesV1Component', () => {
  let component: HeroesV1Component;
  let fixture: ComponentFixture<HeroesV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
