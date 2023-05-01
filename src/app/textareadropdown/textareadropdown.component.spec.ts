import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareadropdownComponent } from './textareadropdown.component';

describe('TextareadropdownComponent', () => {
  let component: TextareadropdownComponent;
  let fixture: ComponentFixture<TextareadropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareadropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareadropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
