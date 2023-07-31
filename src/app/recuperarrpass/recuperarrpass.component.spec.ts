import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarrpassComponent } from './recuperarrpass.component';

describe('RecuperarrpassComponent', () => {
  let component: RecuperarrpassComponent;
  let fixture: ComponentFixture<RecuperarrpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarrpassComponent]
    });
    fixture = TestBed.createComponent(RecuperarrpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
