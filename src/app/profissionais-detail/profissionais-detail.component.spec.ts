import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisDetailComponent } from './profissionais-detail.component';

describe('ProfissionaisDetailComponent', () => {
  let component: ProfissionaisDetailComponent;
  let fixture: ComponentFixture<ProfissionaisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionaisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
