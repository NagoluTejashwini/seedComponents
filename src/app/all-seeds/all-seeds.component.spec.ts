import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSeedsComponent } from './all-seeds.component';

describe('AllSeedsComponent', () => {
  let component: AllSeedsComponent;
  let fixture: ComponentFixture<AllSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
