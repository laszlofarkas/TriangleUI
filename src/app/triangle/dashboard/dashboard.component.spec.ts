import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input for a', () => {
    const a = fixture.nativeElement.querySelector('input#a');
    expect(a).toBeTruthy();
  });

  it('should have input for b', () => {
    const b = fixture.nativeElement.querySelector('input#b');
    expect(b).toBeTruthy();
  });

  it('should have input for c', () => {
    const c = fixture.nativeElement.querySelector('input#c');
    expect(c).toBeTruthy();
  });

  it('should have submit button', () => {
    const button = fixture.nativeElement.querySelector('button[type=submit]');
    expect(button).toBeTruthy();
  });

  it('submit button should be disabled', () => {
    const button = fixture.nativeElement.querySelector('button[type=submit]');
    expect(button.disabled).toBeTruthy();
    expect(button.classList.contains('is-outlined')).toBeTruthy();
  });

  it('button should be enabled when inputs are correct', () => {
    const a = fixture.nativeElement.querySelector('input#a');
    const b = fixture.nativeElement.querySelector('input#b');
    const c = fixture.nativeElement.querySelector('input#c');
    a.value = 12;
    a.dispatchEvent(new Event('input'));
    b.value = 12;
    b.dispatchEvent(new Event('input'));
    c.value = 12;
    c.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button[type=submit]');
    expect(button.disabled).toBeFalsy();
    expect(button.classList.contains('is-outlined')).toBeFalsy();
  });
});
