import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeUsingObserverComponent } from './subscribe-using-observer.component';

describe('SubscribeUsingObserverComponent', () => {
  let component: SubscribeUsingObserverComponent;
  let fixture: ComponentFixture<SubscribeUsingObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeUsingObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeUsingObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
