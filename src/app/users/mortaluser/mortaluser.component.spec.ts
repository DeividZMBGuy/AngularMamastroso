import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortaluserComponent } from './mortaluser.component';

describe('MortaluserComponent', () => {
  let component: MortaluserComponent;
  let fixture: ComponentFixture<MortaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
