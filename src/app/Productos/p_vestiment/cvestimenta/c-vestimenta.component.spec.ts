import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVestimentaComponent } from './c-vestimenta.component';

describe('CVestimentaComponent', () => {
  let component: CVestimentaComponent;
  let fixture: ComponentFixture<CVestimentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CVestimentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CVestimentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
