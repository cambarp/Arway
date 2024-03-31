import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CManualidadesComponent } from './c-manualidades.component';

describe('CManualidadesComponent', () => {
  let component: CManualidadesComponent;
  let fixture: ComponentFixture<CManualidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CManualidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CManualidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
