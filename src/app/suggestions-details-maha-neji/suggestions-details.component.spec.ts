import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionDetailsComponent } from './suggestions-details.component';

describe('SuggestionsDetailsComponent', () => {
  let component: SuggestionDetailsComponent;
  let fixture: ComponentFixture<SuggestionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
