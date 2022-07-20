import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial counter to be zero', () => {
    const wrapper = fixture.nativeElement as HTMLElement;
    const pTag = wrapper.querySelector("p[data-test-id='counter-text'");
    expect(pTag?.textContent).toBe('Counter: 0');
  });

  it('should increment the counter on clicking the button', async () => {
    const button = fixture.debugElement.query(
      By.css("button[data-test-id='increment-button'")
    );
    const wrapper = fixture.nativeElement as HTMLElement;
    const pTag = wrapper.querySelector("p[data-test-id='counter-text'");

    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(pTag?.textContent).toBe('Counter: 1');
    });
  });
});
