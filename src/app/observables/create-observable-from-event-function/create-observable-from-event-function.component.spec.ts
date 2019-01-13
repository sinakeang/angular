import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableFromEventFunctionComponent } from './create-observable-from-event-function.component';

describe('CreateObservableFromEventFunctionComponent', () => {
  let component: CreateObservableFromEventFunctionComponent;
  let fixture: ComponentFixture<CreateObservableFromEventFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObservableFromEventFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObservableFromEventFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
