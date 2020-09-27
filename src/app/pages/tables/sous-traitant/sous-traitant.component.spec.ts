import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousTraitantComponent } from './sous-traitant.component';

describe('SousTraitantComponent', () => {
  let component: SousTraitantComponent;
  let fixture: ComponentFixture<SousTraitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousTraitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousTraitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
