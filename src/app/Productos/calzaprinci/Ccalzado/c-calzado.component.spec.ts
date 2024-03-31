import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCalzadoComponent } from './c-calzado.component';

describe('CCalzadoComponent', () => {
  let component: CCalzadoComponent;
  let fixture: ComponentFixture<CCalzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCalzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCalzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
