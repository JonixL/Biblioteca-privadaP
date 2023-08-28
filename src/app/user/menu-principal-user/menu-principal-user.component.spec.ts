import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalUserComponent } from './menu-principal-user.component';

describe('MenuPrincipalUserComponent', () => {
  let component: MenuPrincipalUserComponent;
  let fixture: ComponentFixture<MenuPrincipalUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincipalUserComponent]
    });
    fixture = TestBed.createComponent(MenuPrincipalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
