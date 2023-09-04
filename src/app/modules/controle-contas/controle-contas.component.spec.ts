import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleContasComponent } from './controle-contas.component';

describe('ControleContasComponent', () => {
  let component: ControleContasComponent;
  let fixture: ComponentFixture<ControleContasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleContasComponent]
    });
    fixture = TestBed.createComponent(ControleContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
