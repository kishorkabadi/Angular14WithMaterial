import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnComponent } from './aboutn.component';

describe('AboutnComponent', () => {
  let component: AboutnComponent;
  let fixture: ComponentFixture<AboutnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
