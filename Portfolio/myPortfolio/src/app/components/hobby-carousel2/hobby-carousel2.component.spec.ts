import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyCarousel2Component } from './hobby-carousel2.component';

describe('HobbyCarousel2Component', () => {
  let component: HobbyCarousel2Component;
  let fixture: ComponentFixture<HobbyCarousel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyCarousel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
