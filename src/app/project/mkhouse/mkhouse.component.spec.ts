import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkhouseComponent } from './mkhouse.component';

describe('MkhouseComponent', () => {
  let component: MkhouseComponent;
  let fixture: ComponentFixture<MkhouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MkhouseComponent]
    });
    fixture = TestBed.createComponent(MkhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
