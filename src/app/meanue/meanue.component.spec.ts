import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanueComponent } from './meanue.component';

describe('MeanueComponent', () => {
  let component: MeanueComponent;
  let fixture: ComponentFixture<MeanueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
