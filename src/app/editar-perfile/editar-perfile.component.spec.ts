import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfileComponent } from './editar-perfile.component';

describe('EditarPerfileComponent', () => {
  let component: EditarPerfileComponent;
  let fixture: ComponentFixture<EditarPerfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPerfileComponent]
    });
    fixture = TestBed.createComponent(EditarPerfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
