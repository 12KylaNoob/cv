import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeboxComponent } from './codebox.component';

describe('CodeboxComponent', () => {
  let component: CodeboxComponent;
  let fixture: ComponentFixture<CodeboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeboxComponent]
    });
    fixture = TestBed.createComponent(CodeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
