import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportivasComponent } from './deportivas.component';

describe('DeportivasComponent', () => {
  let component: DeportivasComponent;
  let fixture: ComponentFixture<DeportivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeportivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
