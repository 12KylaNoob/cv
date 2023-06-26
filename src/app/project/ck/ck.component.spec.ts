import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkComponent } from './ck.component';

describe('CkComponent', () => {
  let component: CkComponent;
  let fixture: ComponentFixture<CkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CkComponent]
    });
    fixture = TestBed.createComponent(CkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
