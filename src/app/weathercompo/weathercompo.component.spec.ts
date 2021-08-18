import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercompoComponent } from './weathercompo.component';

describe('WeathercompoComponent', () => {
  let component: WeathercompoComponent;
  let fixture: ComponentFixture<WeathercompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathercompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
