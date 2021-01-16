import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramColoredTailComponent } from './histogram-colored-tail.component';

describe('HistogramColoredTailComponent', () => {
  let component: HistogramColoredTailComponent;
  let fixture: ComponentFixture<HistogramColoredTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistogramColoredTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogramColoredTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
