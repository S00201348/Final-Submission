import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuth2.0Component } from './oauth2.0.component';

describe('OAuth2.0Component', () => {
  let component: OAuth2.0Component;
  let fixture: ComponentFixture<OAuth2.0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAuth2.0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAuth2.0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
