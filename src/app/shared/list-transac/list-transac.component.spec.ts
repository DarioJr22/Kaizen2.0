import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransacComponent } from './list-transac.component';

describe('ListTransacComponent', () => {
  let component: ListTransacComponent;
  let fixture: ComponentFixture<ListTransacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTransacComponent]
    });
    fixture = TestBed.createComponent(ListTransacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
