import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableWithConstructorComponent } from './create-observable-with-constructor.component';

describe('CreateObservableWithConstructorComponent', () => {
  let component: CreateObservableWithConstructorComponent;
  let fixture: ComponentFixture<CreateObservableWithConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObservableWithConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObservableWithConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
