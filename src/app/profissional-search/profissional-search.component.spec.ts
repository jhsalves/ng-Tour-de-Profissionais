import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalSearchComponent } from './profissional-search.component';

describe('ProfissionalSearchComponent', () => {
  let component: ProfissionalSearchComponent;
  let fixture: ComponentFixture<ProfissionalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
