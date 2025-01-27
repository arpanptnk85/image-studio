import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreprocessComponent } from './preprocess.component';

describe('PreprocessComponent', () => {
  let component: PreprocessComponent;
  let fixture: ComponentFixture<PreprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreprocessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
