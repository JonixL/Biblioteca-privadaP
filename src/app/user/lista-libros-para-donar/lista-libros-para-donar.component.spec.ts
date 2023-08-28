import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLibrosParaDonarComponent } from './lista-libros-para-donar.component';

describe('ListaLibrosParaDonarComponent', () => {
  let component: ListaLibrosParaDonarComponent;
  let fixture: ComponentFixture<ListaLibrosParaDonarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLibrosParaDonarComponent]
    });
    fixture = TestBed.createComponent(ListaLibrosParaDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
