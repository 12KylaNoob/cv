import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MommyoComponent } from './mommyo.component';

describe('MommyoComponent', () => {
  let component: MommyoComponent;
  let fixture: ComponentFixture<MommyoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MommyoComponent]
    });
    fixture = TestBed.createComponent(MommyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
