import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeManagerComponent } from './theme-manager.component';

describe('ThemeManagerComponent', () => {
  let component: ThemeManagerComponent;
  let fixture: ComponentFixture<ThemeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
