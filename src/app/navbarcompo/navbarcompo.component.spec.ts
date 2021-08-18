import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcompoComponent } from './navbarcompo.component';

describe('NavbarcompoComponent', () => {
  let component: NavbarcompoComponent;
  let fixture: ComponentFixture<NavbarcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
