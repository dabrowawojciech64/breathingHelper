import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathSelectorComponent } from './breath-selector.component';

describe('BreathSelectorComponent', () => {
  let component: BreathSelectorComponent;
  let fixture: ComponentFixture<BreathSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreathSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreathSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
