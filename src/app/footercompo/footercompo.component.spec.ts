import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercompoComponent } from './footercompo.component';

describe('FootercompoComponent', () => {
  let component: FootercompoComponent;
  let fixture: ComponentFixture<FootercompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
