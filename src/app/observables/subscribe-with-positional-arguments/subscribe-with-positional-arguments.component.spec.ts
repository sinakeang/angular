import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeWithPositionalArgumentsComponent } from './subscribe-with-positional-arguments.component';

describe('SubscribeWithPositionalArgumentsComponent', () => {
  let component: SubscribeWithPositionalArgumentsComponent;
  let fixture: ComponentFixture<SubscribeWithPositionalArgumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeWithPositionalArgumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeWithPositionalArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
