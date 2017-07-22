import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyCarousel1Component } from './hobby-carousel1.component';

describe('HobbyCarousel1Component', () => {
  let component: HobbyCarousel1Component;
  let fixture: ComponentFixture<HobbyCarousel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyCarousel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
