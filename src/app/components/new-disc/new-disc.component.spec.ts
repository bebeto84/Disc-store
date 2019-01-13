import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscComponent } from './new-disc.component';

describe('NewDiscComponent', () => {
  let component: NewDiscComponent;
  let fixture: ComponentFixture<NewDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
