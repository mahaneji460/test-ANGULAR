import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesResComponent } from './detailes-res.component';

describe('DetailesResComponent', () => {
  let component: DetailesResComponent;
  let fixture: ComponentFixture<DetailesResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailesResComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailesResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
