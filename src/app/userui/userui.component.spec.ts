import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseruiComponent } from './userui.component';

describe('UseruiComponent', () => {
  let component: UseruiComponent;
  let fixture: ComponentFixture<UseruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
