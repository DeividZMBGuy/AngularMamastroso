import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelcompoComponent } from './sidepanelcompo.component';

describe('SidepanelcompoComponent', () => {
  let component: SidepanelcompoComponent;
  let fixture: ComponentFixture<SidepanelcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidepanelcompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
